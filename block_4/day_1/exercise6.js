let piece = "KiNg";
let p;
p = piece.toLowerCase();

switch (p) {
  case "king":
    console.log("diagonal 1, front 1, back 1, left 1, right 1");
    break;
  case "queen":
    console.log("diagonal, front, back, left, right");
    break;
  case "rook":
    console.log("diagonal, front, back, left, right");
    break;
  case "bishop":
    console.log("diagonals");
    break;
  case "knight":
    console.log("in L");
    break;
  case "pawn":
    console.log("front 1");
    break;
  default:
    break;
}
