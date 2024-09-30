export class Beatmap{    
    
    // meta
    beatmap_id?: number;
    cover?: number; // https://assets.ppy.sh/beatmaps/{{cover}}/covers/cover.jpg
    title?: string;
    diffname?: string;
    artist?: string;
    mapper?: string;
    mapper_id?: number;
    // main stats
    star_rating?: number;
    mod_enum?: number;
    bpm?: number;
    drain?: number;
    combo?: number;
    // sub-stats
    circle_size?: number;
    approach_rate?: number;
    overall_difficulty?: number;
    drain_rate?: number;

}