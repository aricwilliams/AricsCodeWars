

/* 

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

NOTE: method converts Unicode values to characters.


function get_char(c){
    return String.fromCharCode(c);
}
*/



/*
Simple Fun #1: Seats in Theater

Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

Example: For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be



function seatsInTheater(nCols, nRows, col, row) {
    return ((nCols - col + 1) * (nRows - row))  
      
    }

//convert to es6 syntax 

const seatsInTheater = (nCols, nRows, col, row) =>
(nCols - col + 1) * (nRows - row)

*/





/*
Total amount of points
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

user array destructuring & turnary operator

string to array str.split();
array to string arr.joint();
*/

function points(games){
    return games.reduce((scoreKeeperCount, game) => {
        const [x,y] = game.split(':');
        const points = x > y ? 3 : x === y ? 1 : 0;
        scoreKeeperCount += points;
        return scoreKeeperCount
    },0);
}
const answer = points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']);

console.log(answer);










// May the force be with you...
