#include "DHT.h"

#define DHTPIN 2     // Pin para temperatura humedad
#define DHTTYPE DHT11   // Tipo de sensor temperatura-humedad

DHT dht(DHTPIN, DHTTYPE); //Inicializando DHT
int sensorValue;

void setup() {
  Serial.begin(9600);
  Serial.println("Temperatura - Humedad");
  pinMode(10,OUTPUT);
  dht.begin();
}


void setup(){  
  Serial.begin(9600);      // sets the serial port to 9600
}

void loop(){
  sensorValue = analogRead(0);       // read analog input pin 0
  Serial.print("AirQua=");
  Serial.print(sensorValue, DEC);  // prints the value read
  Serial.println(" PPM");
  /*lcd.setCursor(0,0);
  lcd.print("ArQ=");
  lcd.print(sensorValue,DEC);
  lcd.print(" PPM");
  lcd.println("       "); 
  lcd.print("  ");*/
  delay(2000);                        // wait 100ms for next reading
}

void medirTempHum(int pin){

  
  
}

