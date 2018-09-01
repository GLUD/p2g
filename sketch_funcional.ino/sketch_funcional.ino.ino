#include "Adafruit_Sensor.h"

#include "DHT.h"


#define DHTPIN 2     // Pin para temperatura humedad
#define DHTTYPE DHT11   // Tipo de sensor temperatura-humedad

DHT dht(DHTPIN, DHTTYPE); //Inicializando DHT
int g;

void setup() {
  Serial.begin(9600);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  dht.begin();
}


void loop(){
  //g trae la medida de calidad de aire
  g = analogRead(0);
  // h trae el porcentaje de humedad
  int h = dht.readHumidity();
  // t trae la medida de temperatura en centigrados
  int t = dht.readTemperature();

  Serial.print(g);
  Serial.print(" ");
  Serial.print(h);
  Serial.print(" ");
  Serial.print(t);
  Serial.println();

  if(g > 50){
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
  }else{
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
  }
  delay(500);
  /*sensorValue = analogRead(0);       // read analog input pin 0
  Serial.print("AirQua=");
  Serial.print(sensorValue, DEC);  // prints the value read
  Serial.println(" PPM");
  lcd.setCursor(0,0);
  lcd.print("ArQ=");
  lcd.print(sensorValue,DEC);
  lcd.print(" PPM");
  lcd.println("       "); 
  lcd.print("  ");
  delay(2000); */                       // wait 100ms for next reading
}
