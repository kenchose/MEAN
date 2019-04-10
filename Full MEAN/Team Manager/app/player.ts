export class Player {
  _httpService: any;
    constructor(
        public id: Number = null,
        public name: String = "",
        public position: String = "Undecided",
        public games: Object = {game1: 'Undecided', game2: 'Undecided', game3: 'Undecided'},
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}
}
