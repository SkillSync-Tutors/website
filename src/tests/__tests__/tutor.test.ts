import { prismaMock } from '../singleton';

test('should create a new tutor', async () => {
  const tutor = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    rate: 50.0,
    commission: 10.0,
    school: 'XYZ University',
    program: 'Computer Science',
    join_date: new Date(),
    balance: 0.0,
    bio: 'Experienced tutor in Computer Science',
    hours_taught: 0.0,
    last_login: new Date(),
    profile_picture: 'profile.jpg',
    active: true,
  };

  prismaMock.tutor.create.mockResolvedValue(tutor);

  await expect(prismaMock.tutor.create({ data: tutor })).resolves.toEqual(tutor);
});
