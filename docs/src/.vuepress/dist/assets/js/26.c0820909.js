(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{301:function(e,r,t){"use strict";t.r(r);var n=t(14),s=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"tests-eng"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tests-eng"}},[e._v("#")]),e._v(" Tests (eng)")]),e._v(" "),r("h2",{attrs:{id:"unit-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit-Tests")]),e._v(" "),r("p",[e._v("Die Unit-Tests befinden sich in der Klasse\n"),r("code",[e._v("GameDataControllerTests.java")]),e._v("{.java}. Mithilfe dieser Tests wird die\nLogik der Klasse "),r("code",[e._v("GameDataController.java")]),e._v("{.java} getestet. Da diese\nTests auf das Model ("),r("code",[e._v("GlobalState")]),e._v("{.java}) zugreifen und mit dem\nSingleton-Pattern dafür gesorgt wird, dass es von dieser Klasse nicht\nmehrere Instanzen gibt, wird vor jedem Test die Methode "),r("code",[e._v("clear()")]),e._v("{.java}\naufgerufen, welche mit der "),r("code",[e._v("@Before")]),e._v("{.java}-Annotation versehen ist und\ndas Model zurücksetzt.")]),e._v(" "),r("p",[r("strong",[e._v("Name")]),e._v(" "),r("strong",[e._v("Beschreibung")]),e._v(" "),r("strong",[e._v("Check")])]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("createNewGameTest1()                    Dieser Test überprüft, ob ein Spiel erstellt werden kann."),r("br"),e._v("\ncreateNewGameTest2()                    Dieser Test überprüft, ob ein Fehler geworfen wird, wenn zwei Spiele erstellt werden."),r("br"),e._v("\ncreateNewGameTest3()                    Dieser Test überprüft, ob kein Spiel vorhanden ist, wenn kein Spiel erstellt wurde."),r("br"),e._v("\ncreateNewGameTest4()                    Dieser Test überprüft, ob ein Spiel vorhanden ist, nachdem es erstellt wurde."),r("br"),e._v("\naddUserTest1()                          Dieser Test überprüft, ob einem Spiel beigetreten werden kann."),r("br"),e._v("\naddUserTest2()                          Dieser Test überprüft, ob ein Fehler geworfen wird, wenn zwei Spielen beigetreten wird."),r("br"),e._v("\naddUserTest3()                          Dieser Test überprüft, ob die bereits bestehenden Spiele richtig geladen werden, damit überprüft werden kann, ob ein Spiel bereits existiert oder nicht."),r("br"),e._v("\nusernameAndGameIdAreSetCorrectTest1()   Dieser Test überprüft, ob die Eingabe von einer korrekten Game-ID und einem korrekten Username auch als korrekt erkannt wird."),r("br"),e._v("\nusernameAndGameIdAreSetCorrectTest2()   Dieser Test überprüft, ob die Eingabe von einer korrekten Game-ID und einem nicht korrekten Username auch als nicht korrekt erkannt wird und dementsprechend ein Fehler geworfen wird."),r("br"),e._v("\nusernameAndGameIdAreSetCorrectTest3()   Dieser Test überprüft, ob die Eingabe von einer nicht korrekten Game-ID und einem korrekten Username auch als nicht korrekt erkannt wird und dementsprechend ein Fehler geworfen wird."),r("br"),e._v("\nusernameAndGameIdAreSetCorrectTest4()   Dieser Test überprüft, ob die Eingabe von einer nicht korrekten Game-ID und einem nicht korrekten Username auch als nicht korrekt erkannt wird und dementsprechend ein Fehler geworfen wird."),r("br"),e._v("\ngenerateMrXStartTimesTest1()            Dieser Test überprüft, ob die Zeiten berechnet werden können, zu denen Mr. X auftaucht."),r("br"),e._v("\ngenerateMrXStartTimesTest2()            Dieser Test überprüft, ob ein Fehler geworfen wird, wenn die Zeiten von Mr. X berechnet werden sollen, ohne dass die Startzeit des Spiels festgelegt wurde."),r("br"),e._v("\ngenerateMrXStartTimesTest3()            Dieser Test überprüft, ob die Anzahl der Zeiten, an denen Mr. X auftaucht korrekt berechnet werden."),r("br"),e._v("\ngenerateMrXStartTimesTest4()            Dieser Test überprüft, ob die Anzahl der Zeiten, an denen Mr. X auftaucht korrekt berechnet werden."),r("br"),e._v("\ngenerateMrXStartTimesTest5()            Dieser Test überprüft, ob die Anzahl der Zeiten, an denen Mr. X auftaucht korrekt berechnet werden."),r("br"),e._v("\ngetLastMrXStartTimeTest1()              Dieser Test überprüft, ob bei der Auswahl der nächsten Zeit, zu der Mr. X auftauchen soll, die richtige zurückgegeben wird."),r("br"),e._v("\ngetUserByNameTest1()                    Dieser Test überprüft, ob mit dem Username eines existierenden Spielers auf die Daten des Spielers zugegriffen werden kann."),r("br"),e._v("\ngetUserByNameTest2()                    Dieser Test überprüft, ob ein Fehler geworfen wird, wenn versucht wird auf einen Spieler zuzugreifen, der nicht existiert."),r("br"),e._v("\nupdateUserLocationTest1()               Dieser Test überprüft, ob der Standort eines existierenden Spielers geändert werden kann."),r("br"),e._v("\nupdateUserLocationTest2()               Dieser Test überprüft, ob ein Fehler geworfen wird, wenn der Standort eines Spielers geändert wird, der nicht existiert."),r("br"),e._v("\ngetMrXGameIdTest1()                     Dieser Test überprüft, ob die User-ID von Mr. X korrekt zurückgegeben wird."),r("br"),e._v("\ngetMrXGameIdTest2()                     Dieser Test überprüft, ob die User-ID von Mr. X korrekt zurückgegeben wird, nachdem Mr. X geändert wurde."),r("br"),e._v("\ndidIFoundMrXTest1()                     Dieser Test überprüft, ob Mr. X gefunden wird, wenn der korrekte Bluetooth Name angegeben wird."),r("br"),e._v("\ndidIFoundMrXTest2()                     Dieser Test überprüft, ob Mr. X nicht gefunden wird, wenn ein nicht korrekter Bluetooth Name angegeben wird."),r("br"),e._v("\ndidIFoundMrXTest3()                     Dieser Test überprüft, ob Mr. X nicht gefunden wird, wenn ein nicht korrekter Bluetooth Name angegeben wird."),r("br"),e._v("\ndidIFoundMrXTest4()                     Dieser Test überprüft, ob Mr. X nicht gefunden wird, wenn ein nicht korrekter Bluetooth Name angegeben wird."),r("br"),e._v("\namIMrXTest1()                           Dieser Test überprüft, ob ich nicht Mr. X bin, wenn dass der Fall ist."),r("br"),e._v("\namIMrXTest2()                           Dieser Test überprüft, ob ich Mr. X bin, wenn dass der Fall ist.")]),e._v(" "),r("h2",{attrs:{id:"ui-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui-tests"}},[e._v("#")]),e._v(" UI-Tests")]),e._v(" "),r("p",[e._v("Die UI-Tests werden mit dem Espresso-Framework durchgeführt und\nüberprüfen, ob die UI-Elemente alle sichtbar sind. Dafür wird vor jedem\nTest die Methode "),r("code",[e._v("setData()")]),e._v("{.java}, welche mit der\n"),r("code",[e._v("@Before")]),e._v("{.java}-Annotation versehen ist, aufgerufen. Diese Methode\nsorgt dafür, dass alle nötigen Daten gespeichert sind, die benötigt\nwerden, um diese Activity aufzurufen.")])])}),[],!1,null,null,null);r.default=s.exports}}]);