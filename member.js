function skillsMember() {
  const member = {
    name: 'John Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
  };
  const { name, age, skills } = member;
  return `Name: ${name}, Age: ${age}, Skills: ${skills.join(', ')}`;
}