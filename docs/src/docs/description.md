
# Beschreibung der App

Im Rahmen des Kurses *Mobile Betriebssysteme und Netzwerke* ist eine App
entstanden, welche das Brettspiel Scotland Yard (oder auch bekannt als
Mister X) in die reale Welt holt. Mit der App ist es möglich in einer
Gruppe eine Art digitales Verstecken in der realen Welt zu spielen. Der
Clou des Spiels ist es, dass eine Person von den anderen Spieler\*innen
gefunden werden muss und der Standort dieser Person nur alle 5 Minuten
(Zeitraum kann selbst festgelegt werden) geteilt wird. Die Standorte der
anderen Spieler\*innen wird in Echtzeit übertragen und auf der Karte
dargestellt. Die Standorte aller Personen werden über eine Firebase
Realtime Database ausgetauscht. Zur Visualisierung der Karte wird das
Mapbox Android SDK verwendet. Sollte die gesuchte Person innerhalb der
Spielzeit (Zeitraum kann selbst festgelegt werden) gefunden werden,
haben die Sucher\*innen gewonnen und die zu suchende Person verloren.
Damit verifiziert werden kann, ob die gesuchte Person wirklich gefunden
wurde, wird versucht eine Bluetooth-Verbindung zwischen den Geräten
herzustellen.