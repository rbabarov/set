import Team from '../team';
import Character from '../Character';

test('add, добавляет выбранного персонажа или сообщает об ошибке', () => {
  const team = new Team();
  team.add('swordsman');
  expect(() => team.add('swordsman')).toThrow(new Error('Такой игрок существует в команде'));
});

test('addAll', () => {
  const players = new Team();
  const player1 = new Character('swordsman');
  const player2 = new Character('bowman');
  const player3 = new Character('magician');
  players.addAll(player1, player2, player3);
  expect(players.members.size).toEqual(3);
});

test('конвертация Set в массив', () => {
  const team = new Team();
  team.addAll('swordsman', 'magician', 'magician', 'bowman');
  team.toArray();
  expect(team.members).toEqual(['swordsman', 'magician', 'bowman']);
});
