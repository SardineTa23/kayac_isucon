create table if not exists playlist_favorite_count
(
    playlist_id bigint       not null primary key,
    count       bigint       not null,
    created_at  timestamp(3) not null
)
    charset = utf8mb4;

create index playlist_favorite_count_count_index
    on playlist_favorite_count (count desc);


create trigger insert_playlist_favorite_trigger
    after insert
    on playlist_favorite
    for each row
        insert into playlist_favorite_count(playlist_id, count, created_at) values (NEW.playlist_id, 1, CURRENT_TIMESTAMP())
        ON DUPLICATE KEY update count = count + 1;


create trigger delete_playlist_favorite_trigger
    after delete
    on playlist_favorite
    for each row
    update playlist_favorite_count set count = count - 1 where playlist_id = OLD.playlist_id;
