var bg 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
  bg = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;
  snow1 = new snow()
}

function draw() {
  background(bg);
  snow1.display()  
  drawSprites();
}