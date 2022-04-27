.PHONY: bench
bench:
	echo -n "" > ~/webapp/nginx/logs/access.log && sudo chmod 777 ~/webapp/nginx/logs/access.log
	cd /home/isucon && ./bench.sh

.PHONY: alp_avg
alp_avg:
	alp -f ~/webapp/nginx/logs/access.log --avg

.PHONY: restart
restart:
	docker-compose up -d --build
