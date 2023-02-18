# Tests (eng)

Unit-Tests
----------

Die Unit-Tests befinden sich in der Klasse
`GameDataControllerTests.java`{.java}. Mithilfe dieser Tests wird die
Logik der Klasse `GameDataController.java`{.java} getestet. Da diese
Tests auf das Model (`GlobalState`{.java}) zugreifen und mit dem
Singleton-Pattern dafür gesorgt wird, dass es von dieser Klasse nicht
mehrere Instanzen gibt, wird vor jedem Test die Methode `clear()`{.java}
aufgerufen, welche mit der `@Before`{.java}-Annotation versehen ist und
das Model zurücksetzt.

  **Name**                                **Beschreibung**                                                                                                                                                                               **Check**
  --------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -----------
  createNewGameTest1()                    Dieser Test überprüft, ob ein Spiel erstellt werden kann.                                                                                                                                      
  createNewGameTest2()                    Dieser Test überprüft, ob ein Fehler geworfen wird, wenn zwei Spiele erstellt werden.                                                                                                          
  createNewGameTest3()                    Dieser Test überprüft, ob kein Spiel vorhanden ist, wenn kein Spiel erstellt wurde.                                                                                                            
  createNewGameTest4()                    Dieser Test überprüft, ob ein Spiel vorhanden ist, nachdem es erstellt wurde.                                                                                                                  
  addUserTest1()                          Dieser Test überprüft, ob einem Spiel beigetreten werden kann.                                                                                                                                 
  addUserTest2()                          Dieser Test überprüft, ob ein Fehler geworfen wird, wenn zwei Spielen beigetreten wird.                                                                                                        
  addUserTest3()                          Dieser Test überprüft, ob die bereits bestehenden Spiele richtig geladen werden, damit überprüft werden kann, ob ein Spiel bereits existiert oder nicht.                                       
  usernameAndGameIdAreSetCorrectTest1()   Dieser Test überprüft, ob die Eingabe von einer korrekten Game-ID und einem korrekten Username auch als korrekt erkannt wird.                                                                  
  usernameAndGameIdAreSetCorrectTest2()   Dieser Test überprüft, ob die Eingabe von einer korrekten Game-ID und einem nicht korrekten Username auch als nicht korrekt erkannt wird und dementsprechend ein Fehler geworfen wird.         
  usernameAndGameIdAreSetCorrectTest3()   Dieser Test überprüft, ob die Eingabe von einer nicht korrekten Game-ID und einem korrekten Username auch als nicht korrekt erkannt wird und dementsprechend ein Fehler geworfen wird.         
  usernameAndGameIdAreSetCorrectTest4()   Dieser Test überprüft, ob die Eingabe von einer nicht korrekten Game-ID und einem nicht korrekten Username auch als nicht korrekt erkannt wird und dementsprechend ein Fehler geworfen wird.   
  generateMrXStartTimesTest1()            Dieser Test überprüft, ob die Zeiten berechnet werden können, zu denen Mr. X auftaucht.                                                                                                        
  generateMrXStartTimesTest2()            Dieser Test überprüft, ob ein Fehler geworfen wird, wenn die Zeiten von Mr. X berechnet werden sollen, ohne dass die Startzeit des Spiels festgelegt wurde.                                    
  generateMrXStartTimesTest3()            Dieser Test überprüft, ob die Anzahl der Zeiten, an denen Mr. X auftaucht korrekt berechnet werden.                                                                                            
  generateMrXStartTimesTest4()            Dieser Test überprüft, ob die Anzahl der Zeiten, an denen Mr. X auftaucht korrekt berechnet werden.                                                                                            
  generateMrXStartTimesTest5()            Dieser Test überprüft, ob die Anzahl der Zeiten, an denen Mr. X auftaucht korrekt berechnet werden.                                                                                            
  getLastMrXStartTimeTest1()              Dieser Test überprüft, ob bei der Auswahl der nächsten Zeit, zu der Mr. X auftauchen soll, die richtige zurückgegeben wird.                                                                    
  getUserByNameTest1()                    Dieser Test überprüft, ob mit dem Username eines existierenden Spielers auf die Daten des Spielers zugegriffen werden kann.                                                                    
  getUserByNameTest2()                    Dieser Test überprüft, ob ein Fehler geworfen wird, wenn versucht wird auf einen Spieler zuzugreifen, der nicht existiert.                                                                     
  updateUserLocationTest1()               Dieser Test überprüft, ob der Standort eines existierenden Spielers geändert werden kann.                                                                                                      
  updateUserLocationTest2()               Dieser Test überprüft, ob ein Fehler geworfen wird, wenn der Standort eines Spielers geändert wird, der nicht existiert.                                                                       
  getMrXGameIdTest1()                     Dieser Test überprüft, ob die User-ID von Mr. X korrekt zurückgegeben wird.                                                                                                                    
  getMrXGameIdTest2()                     Dieser Test überprüft, ob die User-ID von Mr. X korrekt zurückgegeben wird, nachdem Mr. X geändert wurde.                                                                                      
  didIFoundMrXTest1()                     Dieser Test überprüft, ob Mr. X gefunden wird, wenn der korrekte Bluetooth Name angegeben wird.                                                                                                
  didIFoundMrXTest2()                     Dieser Test überprüft, ob Mr. X nicht gefunden wird, wenn ein nicht korrekter Bluetooth Name angegeben wird.                                                                                   
  didIFoundMrXTest3()                     Dieser Test überprüft, ob Mr. X nicht gefunden wird, wenn ein nicht korrekter Bluetooth Name angegeben wird.                                                                                   
  didIFoundMrXTest4()                     Dieser Test überprüft, ob Mr. X nicht gefunden wird, wenn ein nicht korrekter Bluetooth Name angegeben wird.                                                                                   
  amIMrXTest1()                           Dieser Test überprüft, ob ich nicht Mr. X bin, wenn dass der Fall ist.                                                                                                                         
  amIMrXTest2()                           Dieser Test überprüft, ob ich Mr. X bin, wenn dass der Fall ist.                                                                                                                               

UI-Tests
--------

Die UI-Tests werden mit dem Espresso-Framework durchgeführt und
überprüfen, ob die UI-Elemente alle sichtbar sind. Dafür wird vor jedem
Test die Methode `setData()`{.java}, welche mit der
`@Before`{.java}-Annotation versehen ist, aufgerufen. Diese Methode
sorgt dafür, dass alle nötigen Daten gespeichert sind, die benötigt
werden, um diese Activity aufzurufen.