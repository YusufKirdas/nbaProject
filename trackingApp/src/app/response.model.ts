export interface TeamsResponse {
    data: Teams[];
    meta: Meta;
}

export interface Teams {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface Meta {
    total_pages: number;
    current_page: number;
    next_page: any;
    per_page: number;
    total_count: number;
}

export interface GamesResponse {
    data: Games[];
    meta: Meta;
}

export interface Games {
    id: number;
    date: string;
    home_team: HomeTeam;
    home_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    visitor_team: VisitorTeam;
    visitor_team_score: number;
}

export interface HomeTeam {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}

export interface VisitorTeam {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
}