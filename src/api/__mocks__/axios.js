const mockResponse = [
  {
    name: "charizard",
    abilities: [
      {
        ability: {
          name: "fly",
          url: "www.google.com",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    experience: 50,
    height: 70,
    id: 1,
    moves: [
      {
        move: {
          name: "fast fly",
          url: "www.google.com",
        },
      },
    ],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    shinyImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    state: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "www.google.com",
        },
      },
    ],
    weight: 61,
  },
  {
    name: "pikachu",
    abilities: [
      {
        ability: {
          name: "fly",
          url: "www.google.com",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    experience: 50,
    height: 70,
    id: 1,
    moves: [
      {
        move: {
          name: "fast fly",
          url: "www.google.com",
        },
      },
    ],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    shinyImage:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    state: [
      {
        base_stat: 45,
        effort: 0,
        stat: {
          name: "hp",
          url: "www.google.com",
        },
      },
    ],
    weight: 61,
  },
];

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
