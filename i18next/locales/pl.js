module.exports = {
  translation: {
    keywords: {
      none: 'brak'
    },

    languages: {
      en: 'Angielski',
      pl: 'Polski'
    },

    buttons: {
      aboutMe: ':question: O mnie',
      gettingStarted: ':green_book: Jak zacząć?',
      settings: ':gear: Ustawienia',
      close: ':heavy_multiplication_x: Zamknij',
      goBack: 'Powrót',
      regenerate: 'Wygeneruj nowy'
    },

    confirmationDialogs: {
      titles: {
        areYouSure: 'Jesteś pewien?'
      },
      texts: {
        regenerateGloSecret: 'Jeli wygenerujesz nowe hasło, nie będziesz dostawał powiadomień dopóki go nie zmienisz w ustawieniach tablicy Glo.'
      },
      confirm: 'Tak',
      deny: 'Nie, zmieniłem zdanie'
    },

    messages: {
      home:
`Hej, jestem *Flo*.
Jak mogę ci pomóc?`,
      aboutMe: 
`Jak pewnie wiesz, mam na imię *Flo*, ale lubię się z dumą przedstawiać jako *Błyskawicznie szybki powiadamiacz Glo dla Slacka*.


Zostałem stworzony przez *Sebastiana Szczepańskiego*, początkowo jako projekt na konkurs *Glo*.


Warto mieć mnie obok - co mogłoby byś lepszego niż powiadomienia o działaniach zespołu w czasie rzeczywistym?


Rozmawiam również w wielu językach. Co prawda nie we wszystkich, ale wciąż się uczę...


Mam nadzieję, że spełnię wszystkie twoje oczekiwania.


Miło było cię poznać :heart:


<https://github.com/sszczep/Flo|Flo na GitHubie>
<https://sszczep.github.io/Flo/|Oficjalna strona internetowa>`,
      gettingStarted:
`Utknąłeś, huh? Nie martw się.

Poradnik jak zacząć znajdziesz <https://sszczep.github.io/Flo/#getting-started|tutaj>.`,
      settings: {
        header: 'Co chciałbyś zmienić?',
        chooseLanguage: 'Zmień język',
        GloUrl: 'URL dla webhooków Glo',
        GloSecret: 'Hasło dla webhooków Glo'
      }
    },

    notifications: {
      glo: {
        boards: {
          archived: {
            title: '*{{ sender.name }}* zarchiwizował tablicę *{{ board.name }}*.'
          },
          unarchived: {
            title: '*{{ sender.name }}* przywrócił tablicę *{{ board.name }}*.'
          },
          updated: {
            title: '*{{ sender.name }}* zmienił nazwę tablicy *{{ board.previous.name }}*.',
            content:
`*Poprzednia nazwa:* {{ board.previous.name }}
*Obecna nazwa:* {{ board.name }}`
          },
          deleted: {
            title: '*{{ sender.name }}* usunał tablicę *{{ board.name }}*.'
          },
          labels_updated: {
            added: {
              title: '*{{ sender.name }}* stworzył nową etykietę w tablicy *{{ board.name }}*.',
              content:
`*Nazwa:* {{ label.name }}
*Kolor:* R{{ label.color.r }} G{{ label.color.g }} B{{ label.color.b}}`
            },
            updated: {
              title: '*{{ sender.name }}* zaktualizował etykietę *{{ label.previous.name }}* w tablicy *{{ board.name }}*.',
              previous:
`*Poprzednia etykieta:*
*Nazwa:* {{ label.previous.name }}
*Kolor:* R{{ label.previous.color.r }} G{{ label.previous.color.g }} B{{ label.previous.color.b}}`,
              current:
`*Obecna etykieta:*
*Nazwa:* {{ label.name }}
*Kolor:* R{{ label.color.r }} G{{ label.color.g }} B{{ label.color.b}}`
            },
            deleted: {
              title: '*{{ sender.name }}* usunął etykietę *{{ label.name }}* z tablicy *{{ board.name }}*.'
            }
          },
          members_updated: {
            invited: {
              title: '*{{ sender.name }}* zaprosił *{{ member.name }}* (_{{ member.role }}_) do tablicy *{{ board.name }}*.'
            },
            joined: {
              title: '*{{ member.name }}* dołączył do tablicy *{{ board.name }}*!'
            },
            updated: {
              title: '*{{ sender.name }}* zmienił rolę *{{ member.name }} w tablicy *{{ board.name }}* na _{{ member.role }}_ .'
            },
            removed: {
              title: '*{{ sender.name }}* wyrzucił *{{ member.name }}* z tablicy *{{ board.name }}* :cry:.'
            },
            members:
`*Obecni członkowie:*
{{ members}}`,
            invitedMembers:
`*Zaproszeni członkowie:*
{{ members }}`,
            noInvitedMembers: 'nie ma na razie zaproszonych użytkowników.'
          }
        },
        columns: {
          added: {
            title: '*{{ sender.name }}* dodał nową kolumnę *{{ column.name }}* w tablicy *{{ board.name }}*.'
          },
          updated: {
            title: '*{{ sender.name }}* zmienił nazwę kolumny *{{ column.previous.name }}* w tablicy *{{ board.name }}*.',
            content:
`*Poprzednia nazwa:* {{ column.previous.name }}
*Obecna nazwa:* {{ column.name }}`
          },
          archived: {
            title: '*{{ sender.name }}* zarchiwizował kolumnę *{{ column.name }}* w tablicy *{{ board.name }}*.'
          },
          unarchived: {
            title: '*{{ sender.name }}* przywrócił kolumnę *{{ column.name }}* w tablicy *{{ board.name }}*.'
          },
          deleted: {
            title: '*{{ sender.name }}* usunął kolumnę *{{ column.name }}* w tablicy *{{ board.name }}*.'
          }
        },
        cards: {
          added: {
            title: '*{{ sender.name }}* dodał nową kartę *{{ card.name }}* w tablicy *{{ board.name }}*.'
          },
          updated: {
            title: '*{{ sender.name }}* dokonał zmian w karcie *{{ card.previous.name }}* w tablicy *{{ board.name }}*.',
            previous:
`*Poprzednia nazwa:* {{ card.previous.name}}
*Poprzedni opis:* 
{{ card.previous.description.text }}`,
            current:
`*Obecna nazwa:* {{ card.name }}
*Obecny opis:* 
{{ card.description.text }}`
          },
          copied: {
            title: '*{{ sender.name }}* sklonował kartę z tablicy *{{ board.name }}* i zapisał ją jako *{{ card.name }}*.'
          },
          archived: {
            title: '*{{ sender.name }}* zarchiwizował kartę *{{ card.name }}* w tablicy *{{ board.name }}*.'
          },
          unarchived: {
            title: '*{{ sender.name }}* przywrócił kartę *{{ card.name }}* w tablicy *{{ board.name }}*.'
          },
          deleted: {
            title: '*{{ sender.name }}* usunął kartę *{{ card.name }}* z tablicy *{{ board.name }}*.'
          },
          moved_to_board: {
            title: '*{{ sender.name }}* przeniósł kartę *{{ card.name }}* poza tablicę *{{ board.name }}*.'
          },
          moved_from_board: {
            title: '*{{ sender.name }}* przeniósł kartę *{{ card.name }}* do tablicy *{{ board.name }}*.',
            description:
`*Opis:*
{{ description }}`,
            details:
`*Etykiety:* {{ labels }}
*Przypisani członkowie:* {{ assignees }}
*Ukończone zadania:* {{ tasks }}
*Załączniki:* {{ attachments }}
*Komentarze:* {{ comments }}
`
          },
          labels_updated: {
            title: '*{{ sender.name }}* zmienił etykiety karty *{{ card.name }}* w tabeli *{{ board.name }}*.',
            content:
`*Dodane:* {{ added }}
*Usunięte:* {{ removed }}`,
            noRemoved: '_żadne etykiety nie zostały usunięte_',
            noAdded: '_żadne etykiety nie zostały dodane_'
          },
          assignees_updated: {
            title: '*{{ sender.name }}* zmienił przypisanych członków karty *{{ card.name }}* w tabeli *{{ board.name }}*.',
            content:
`*Dodani:* {{ added }}
*Usunięci:* {{ removed }}`,
            noRemoved: '_żadni członkowie nie zostali odsunięci_',
            noAdded: '_żadni członkowie nie zostali przypisani_'
          }
        },
        comments: {
          added: {
            title: '*{{ sender.name }}* dodał nowy komentarz w karcie *{{ card.name }}* w tablicy *{{ board.name }}*.',
            content: '*Zawartość:* {{ comment.text }}'
          },
          updated: {
            title: '*{{ sender.name }}* zaktualizował komentarz w karcie *{{ card.name }}* w tablicy *{{ board.name }}*.',
            previous:
`*Poprzedni:*
{{ comment.previous.text }}`,
            current:
`*Obecny:*
{{ comment.text }}`
          },
          deleted: {
            title: '*{{ sender.name }}* usunął komentarz z karty *{{ card.name }}* w tablicy *{{ board.name }}*.'
          }
        }
      }
    }
  }
};
