#!/bin/zsh

function msg(){
	if [ $1 = 1 ];then
		echo -e "> $2"
		sizeT=$(expr length "$2")
		shift
		shift
		if [ "$mode" = 'zen' -o "$mode" = 'log' ];then
			$@ 2> bad.log > good.log
		fi
		lines=$(cat good.log)
		oldIFS=$IFS
		IFS=$'\n'
		for j in $(echo $lines);do
			echo -e "@INFO $j"
		done
		IFS=$oldIFS
		rm bad.log good.log 2> /dev/null
		if [ "$mode" = 'log' ];then
			lines=$(cat bad.log)
			oldIFS=$IFS
			IFS=$'\n'
			for j in $(echo $lines);do
				echo -e "@WARN $j"
			done
			IFS=$oldIFS
		fi
	fi
}

prod=0
list=0
image=0
launch=0
mode="zen"

cpt=0
for i in $@;do
	cpt=$(expr $cpt + 1)
	if [ $i = "--prod" -o $i = "-p" ];then
		prod=1
	fi
	if [ $i = "--exe" -o $i = "-e" ];then
		prod=1
		image=1
		launch=1
	fi
	if [ $i = "--all" -o $i = "-a" ];then
		list=1
		prod=1
		image=1
		launch=1
	fi
	if [ $i = "--list" -o $i = "-ls" ];then
		list=1
	fi
	if [ $i = "--build-image" -o $i = "-bi" ];then
		image=1
	fi
	if [ $i = "--launch" -o $i = "-l" ];then
		launch=1
	fi
	if [ $i = "--help" -o $i = "-h" ];then
		msg 1 "HELP" echo -e "
		\r--prod, -p         : build angular app on prod
		\r--list, -ls        : list images docker
		\r--build-image, -bi : create image docker
		\r--mode <m>, -m <m> : specify the mode | 'zen' [default]/'log' = not display/display result command
		\r--launch, -l       : launch app on nginx server
		\r--exe, -e          : start needed components to launch application
		\r--all, -a          : use all components, even those that are not needed
		\r--help, -h         : print this help"
	fi
	if [ $i = "--mode" -o $i = "-m" ];then
		cpt=$(expr $cpt + 1)
		mode=${@[$cpt]}
	fi
done

msg $prod "BUILD PROD" ng build --prod
msg $image "BUILD IMAGE DOCKER" docker build -t zik-lector .
msg $list "LIST IMAGES DOCKER" docker image ls
msg $launch "PRE-LAUNCH : stop old container" docker stop $(docker ps -af "name=ZL-container" -q) 2> /dev/null
msg $launch "PRE-LAUNCH : remove old container" docker rm $(docker ps -af "name=ZL-container" -q) 2> /dev/null
msg $launch "LAUNCH APP" docker run --name ZL-container -d -p 15432:80 zik-lector


