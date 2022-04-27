.PHONY: bench
bench:
	echo -n "" > ~/webapp/nginx/logs/access.log && sudo chmod 777 ~/webapp/nginx/logs/access.log
	cd /home/isucon && ./bench.sh
