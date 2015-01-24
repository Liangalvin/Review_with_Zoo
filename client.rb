require 'HTTParty'

url = "http://localhost:3000/animals"
obj = HTTParty.get(url);

puts obj;

puts "Which animal?"
answer = gets.chomp

obj.each do |anml, value|
  if answer != anml
    str = "does not exists"
      puts str
    else
      puts value
  end
end
