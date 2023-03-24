(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{290:function(e,a,n){"use strict";n.r(a);var t=n(14),r=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"komponenten"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komponenten"}},[e._v("#")]),e._v(" Komponenten")]),e._v(" "),a("p",[e._v("Die App ist nach dem Model-View-Control Modell aufgebaut. Im\nNachfolgenden werden die einzelnen Komponenten detailliert beschrieben.")]),e._v(" "),a("h2",{attrs:{id:"model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[e._v("#")]),e._v(" Model")]),e._v(" "),a("p",[e._v("In dem Model werden alle für das Spiel verwendeten Daten lokal\ngespeichert. Für die Realisierung wird dabei die Klasse\n"),a("code",[e._v("GlobalState.java")]),e._v("{.java} verwendet. Mithilfe des Singleton-Pattern wird\nsichergestellt, dass es von dieser Klasse nicht mehrere Instanzen gibt.\nIn dieser Klasse werden folgende Daten gespeichert:")]),e._v(" "),a("p",[a("strong",[e._v("Datentyp")]),e._v(" "),a("strong",[e._v("Name")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("ArrayList<Message>")]),e._v("{.java}                         allMessages        Speichert die Nachrichten aller Spieler.\n"),a("code",[e._v("List<User>")]),e._v("{.java}                                 allUserData        Speichert die Daten aller Spieler.\n"),a("code",[e._v("HashMap<String, HashMap<String, String>>")]),e._v("{.java}   allExistingGames   Speichert alle bereits existierenden Spiele inklusive der Usernamen und Bluetooth Namen.\n"),a("code",[e._v("GameData")]),e._v("{.java}                                   gameData           Speichert die allgemeinen Daten für das Spiel.\n"),a("code",[e._v("User")]),e._v("{.java}                                       myUserData         Speichert die eigenen Spieler Daten.\n"),a("code",[e._v("Long")]),e._v("{.java}                                       startTime          Speichert, ab wann Mr. X gesucht werden kann.\n"),a("code",[e._v("ArrayList<Long> mrXStartTimes")]),e._v("{.java}              mrXStartTimes      Speichert die Zeiten, zu denen Mr. X auf der Karte auftaucht")]),e._v(" "),a("p",[e._v("Für die Speicherung der allgemeinen Spieldaten, der Nachrichten und der\nSpieler, wurden eigene Klassen erstellt. Diese werden im folgenden kurz\nerörtert.")]),e._v(" "),a("h3",{attrs:{id:"message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[e._v("#")]),e._v(" Message")]),e._v(" "),a("p",[e._v("Die Klasse "),a("code",[e._v("Message.java")]),e._v("{.java} speichert für jede Nachricht die\nbenötigten Daten. Diese sind:")]),e._v(" "),a("p",[a("strong",[e._v("Datentyp")]),e._v(" "),a("strong",[e._v("Name")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("String")]),e._v("{.java}   username    Speichert den Username des Spielers, der die Nachricht versendet hat.\n"),a("code",[e._v("int")]),e._v("{.java}      timestamp   Speichert die Zeit im timestamp-Format, zu der die Nachricht versendet wurde.\n"),a("code",[e._v("String")]),e._v("{.java}   message     Speichert den Inhalt der Nachricht.")]),e._v(" "),a("h3",{attrs:{id:"gamedata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gamedata"}},[e._v("#")]),e._v(" GameData")]),e._v(" "),a("p",[e._v("Die Klasse "),a("code",[e._v("GameData.java")]),e._v("{.java} speichert für das Spiel die benötigten\nDaten. Diese sind:")]),e._v(" "),a("p",[a("strong",[e._v("Datentyp")]),e._v(" "),a("strong",[e._v("Name")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("int")]),e._v("{.java}          gameId            Speichert die Game-ID.\n"),a("code",[e._v("Integer")]),e._v("{.java}      gameDuration      Speichert die Dauer des Spiels in Minuten.\n"),a("code",[e._v("Integer")]),e._v("{.java}      showMrXInterval   Speichert das Interval, in dem Mr. X auftaucht in Minuten.\n"),a("code",[e._v("GameStatus")]),e._v("{.java}   gameStatus        Speichert den GameStatus als Enumeration.\n"),a("code",[e._v("String")]),e._v("{.java}       mrX               Speichert den Username von Mr. X.")]),e._v(" "),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" User")]),e._v(" "),a("p",[e._v("Die Klasse "),a("code",[e._v("User.java")]),e._v("{.java} speichert für jeden Spieler die benötigten\nDaten. Diese sind:")]),e._v(" "),a("p",[a("strong",[e._v("Datentyp")]),e._v(" "),a("strong",[e._v("Name")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("double")]),e._v("{.java}    longitude             Speichert den Längengrad des Spielers.\n"),a("code",[e._v("double")]),e._v("{.java}    latitude              Speichert den Breitengrad des Spielers.\n"),a("code",[e._v("boolean")]),e._v("{.java}   iAmMrX                Speichert, ob der Spieler Mr. X ist.\n"),a("code",[e._v("boolean")]),e._v("{.java}   iAmTheGameMaster      Speichert, ob der Spieler GameMaster ist.\n"),a("code",[e._v("int")]),e._v("{.java}       userID                Speichert die User-ID des Spielers.\n"),a("code",[e._v("String")]),e._v("{.java}    bluetoothDeviceName   Speichert den Bluetooth Namen des Spielers.\n"),a("code",[e._v("String")]),e._v("{.java}    username              Speichert den Username des Spielers.")]),e._v(" "),a("h2",{attrs:{id:"view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[e._v("#")]),e._v(" View")]),e._v(" "),a("p",[e._v("Für das Spiel werden verschiedene Views/Activities benötigt. Diese sind:")]),e._v(" "),a("p",[a("strong",[e._v("Name der Activity")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("StartScreen.java")]),e._v("{.java}      Diese Activity wird beim Start der App geöffnet. Hier haben die Spieler die Möglichkeit entweder ein neues Spiel zu erstellen oder einem Spiel beizutreten.\n"),a("code",[e._v("JoiningScreen.java")]),e._v("{.java}    Sobald der Spieler ein Spiel erstellt hat oder einem beigetreten ist, wird diese Activity geöffnet. Hier sehen alle Spieler, wer alles mitspielt. Sobals ein neuer Spieler dem Spiel beitritt, wird der Name angezeigt. Für das Anzeigen der Spieler wird ein RecyclerView verwendet. Der Spieler, der das Spiel erstellt hat (GameMaster) hat in dieser Activity die Möglichkeit, das Spiel zu starten.\n"),a("code",[e._v("SettingsScreen.java")]),e._v("{.java}   Wenn der GameMaster das Spiel gestartet hat, werden ihm die Einstellungen angezeigt. Hier kann er einstellen, wie lange das SPiel dauert, wie oft Mr. X auftaucht und wer Mr. X ist.\n"),a("code",[e._v("LoadingScreen.java")]),e._v("{.java}    Diese Activity wird mehrfach verwendet und verwendet die Methode "),a("code",[e._v("getIntent().getExtras()")]),e._v("{.java}, um die Daten zu laden, welche angeben, was dargestellt werden soll. Diese Activity wird verwendet, wenn der GameMaster die Einstellungen festlegt, Mr. X sich versteckt und wenn das Spiel vorbei ist.\n"),a("code",[e._v("MapScreen.java")]),e._v("{.java}        Diese Activity zeigt die Karte und die Standorte aller Spieler. Über und unter der Karte befinden sich zwei Countdowns. Der obere Countdown zeigt an, wie lange das Spiel noch geht und der untere zeigt an, wann Mr. X das nächste mal auftaucht. In der linken oberen Ecke befindet sich ein Button, mit dem man den Chat öffnet und mit den anderen Spielern schreiben kann. Unter der Karte befindet sich zudem ein Slider, den man verwenden muss, wenn man Mr. X gefunden hat. Der Chat-Button und der Slider werden nur angezeigt, wenn man selber nicht Mr. X ist.\n"),a("code",[e._v("ChatScreen.java")]),e._v("{.java}       Diese Activity zeigt den Chat der Spieler an. Alle Nachrichten werden chronologisch mit Hilfe eines RecyclerViews angezeigt, wobei einkommende Nachrichten auf der linken Seite inklusive Name erscheinen und gesendete Nachrichten auf der rechten Seite.")]),e._v(" "),a("h2",{attrs:{id:"control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#control"}},[e._v("#")]),e._v(" Control")]),e._v(" "),a("p",[e._v("Die App besitzt zwei Controller. Den "),a("code",[e._v("GameDataController.java")]),e._v("{.java}\nund den "),a("code",[e._v("FireBaseController.java")]),e._v("{.java}. Der\n"),a("code",[e._v("GameDataController.java")]),e._v("{.java} steuert die komplette Logik zwischen\ndem Model und dem View, die sich auf die lokal gespeicherten Daten\nbezieht und besitzt folgende Methoden:")]),e._v(" "),a("p",[a("strong",[e._v("Name der Methode")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("gameIdExistsAlready()")]),e._v("{.java}                Überprüft, ob eine Game-ID bereits existiert.\n"),a("code",[e._v("createNewGame()")]),e._v("{.java}                      Erstellt ein neues Spiel.\n"),a("code",[e._v("joinGame()")]),e._v("{.java}                           Tritt einem bereits vorhanden Spiel bei.\n"),a("code",[e._v("bluetoothDeviceNameExistsAlready()")]),e._v("{.java}   Überprüft, ob der Bluetooth Name bereits vergeben ist.\n"),a("code",[e._v("usernameExistsAlready()")]),e._v("{.java}              Überprüft, ob der Username bereits vergeben ist.\n"),a("code",[e._v("usernameAndGameIdAreSetCorrect()")]),e._v("{.java}     Überprüft, ob die Eingabe von dem Username und der Game-ID korrekt sind.\n"),a("code",[e._v("generateMrXStartTimes()")]),e._v("{.java}              Berechnet die Zeiten, zu denen Mr. X auftaucht.\n"),a("code",[e._v("getLastMrXStartTime()")]),e._v("{.java}                Gibt die Zeit zurück, zu der Mr. X das letzte Mal aufgetaucht ist.\n"),a("code",[e._v("updateUserLocation()")]),e._v("{.java}                 Ändert die Positionsdaten eines Spielers\n"),a("code",[e._v("getMrXUserId()")]),e._v("{.java}                       Gibt die User-ID von Mr. X zurück.\n"),a("code",[e._v("didIFoundMrX()")]),e._v("{.java}                       Überprüft, ob man Mr. X gefunden hat.\n"),a("code",[e._v("amIMrX()")]),e._v("{.java}                             Überprüft, ob man selber Mr. X ist.\n"),a("code",[e._v("getAllUser()")]),e._v("{.java}                         Gibt alle Spieler zurück.\n"),a("code",[e._v("getGameDuration()")]),e._v("{.java}                    Gibt die Dauer des Spiels zurück.\n"),a("code",[e._v("getShowMrXInterval()")]),e._v("{.java}                 Gibt das Zeitintervall zurück, in dem Mr. X auftaucht.\n"),a("code",[e._v("getAllMessages()")]),e._v("{.java}                     Gibt alle Nachrichten zurück.\n"),a("code",[e._v("getGameStatus()")]),e._v("{.java}                      Gibt den aktuellen GameStatus zurück.\n"),a("code",[e._v("getUserByName()")]),e._v("{.java}                      Gibt die Daten eines Spieler zurück über den Username.")]),e._v(" "),a("p",[e._v("Der "),a("code",[e._v("FireBaseController.java")]),e._v("{.java} steuert die komplette Logik\nzwischen der Firebase-Datenbank und dem Model bzw. dem\n"),a("code",[e._v("GameDataController.java")]),e._v("{.java}.")]),e._v(" "),a("p",[a("strong",[e._v("Name der Methode")]),e._v(" "),a("strong",[e._v("Beschreibung")])]),e._v(" "),a("hr"),e._v(" "),a("p",[a("code",[e._v("createNewGame()")]),e._v("{.java}         Lädt die Daten eines neu erstellten Spiels in die Datenbank.\n"),a("code",[e._v("joinGame()")]),e._v("{.java}              Lädt die Daten des Spielers in die Datenbank, wenn er einem Spiel beigetreten ist.\n"),a("code",[e._v("getAllExistingGames()")]),e._v("{.java}   Lädt alle bereits existierenden Game-IDs aus der Datenbank inklusive der Usernames und der Bluetooth Namen. Dadurch kann überprüft werden, ob man ein Spiel erstellen kann oder einem Spiel beitreten kann.\n"),a("code",[e._v("loadOtherPlayers()")]),e._v("{.java}      Sobald in der Datenbank ein neuer Spieler hinzugefügt wurde, wird diese Methode ausgelöst und die Daten werden lokal gespeichert. Dadurch können in der Activity "),a("code",[e._v("JoiningScreen.java")]),e._v("{.java} alle Spieler angezeigt werden.\n"),a("code",[e._v("settingDone()")]),e._v("{.java}           Speichert in der Datenbank, dass der GameMaster mit den Einstellungen fertig ist und das Spiel starten kann.\n"),a("code",[e._v("joiningDone()")]),e._v("{.java}           Speichert in der Datenbank, dass der GameMaster das Spiel gestartet hat.\n"),a("code",[e._v("loadNewGameStatus()")]),e._v("{.java}     Überprüft, ob sich der GameStatus verändert hat. Dadurch wissen die anderen Spieler, die nicht der GameMaster sind, wann das Spiel startet.\n"),a("code",[e._v("sendMessage()")]),e._v("{.java}           Beim versenden von Nachrichten, werden diese mit Hilfe dieser Methode in der Datenbank gespeichert.\n"),a("code",[e._v("loadMessages()")]),e._v("{.java}          Überprüft, ob ein Spieler eine Nachricht an die Datenbank gesendet hat. Wenn eine neue Nachricht ankommt, wird diese lokal hinzugefügt und kann in der Activity "),a("code",[e._v("ChatScreen.java")]),e._v("{.java} angezeigt werden.\n"),a("code",[e._v("updateMyLocation()")]),e._v("{.java}      Sendet die aktuelle Location an die Datenbank.")]),e._v(" "),a("p",[a("img",{attrs:{src:"uml.pdf",alt:"Model-View-Control Diagramm"}}),e._v('{#fig:game width="\\linewidth"}')])])}),[],!1,null,null,null);a.default=r.exports}}]);