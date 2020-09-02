// 封装歌曲类
/* 
用到的数据
albummid    专辑id
albumname  专辑名称
songid  歌曲id
songname    歌曲名称
strMediaMid 歌曲id
singer  歌手
*/
export default class Song {
    constructor({albummid,albumname,songid,songname,strMediaMid,singer}){
        this.albummid = albummid;
        this.albumname = albumname;
        this.songid = songid;
        this.songname = songname;
        this.strMediaMid = strMediaMid;
        this.singer = singer;
    }
}