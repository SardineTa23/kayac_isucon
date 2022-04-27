## ベンチ

### Mysqlのログローテーション
```
古いログファイルに日付をつける
$ docker-compose exec mysql bash -c 'now=`date +%Y%m%d-%H%M%S` && mv /var/log/mysql/slow.log /var/log/mysql/slow.log.$now'
mysql コンテナに入る
$ docker compose exec mysql bash
コンテナの中でmysqladminコマンドを実行
$ mysqladmin flush-logs -u root -p
Enter password: rootと入力!
```
