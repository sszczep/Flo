module.exports = {
  translation: {
    keywords: {
      name: 'Nazwa',
      description: 'Opis',
      author: 'Autor',
      dueDate: 'Termin',
      labels: 'Etykiety',
      members: 'Członkowie',
      assignees: 'Przypisani członkowie',
      content: 'Treść',
      old: 'Stary',
      new: 'Nowy',
      added: 'Dodany',
      removed: 'Usunięty',
      none: 'brak'
    },
    errors: {
      NoCommand:
`nie ma takiej komendy.

Lista dostępnych komend:
{{ listing }}`
    },
    commands: {
      index: {
        description: 'krótkie info o mnie',
        message:
`witaj! Nazywam się **{{ name }} v{{ version }}**.

Będę cię powiadamiał o statnich zmianach w tablicach GitKraken Glo.
Po więcej szczegółów, wpisz **{{ prefix }} help**
Aby uzyskać listę dostępnych komend, wpisz **{{ prefix }} list**`
      },
      help: {
        description: 'pokaż pomoc ogólną lub dotyczącą konrkretnej komendy',
        message:
`Zostałem stworzony aby zapewnić dobrą integrację Discorda z GitKraken Glo.
Będę cię powiadamiał o statnich zmianach w tablicach GitKraken Glo.

Aby rozpocząć, powinieneś najpierw ustawić webhooki. Po więcej informacji wpisz **{{ prefix }} help webhooks**.

Aby zmienić język, wpisz **{{ prefix }} language [code]**, gdzie *code* jest kodem twojego języka.

Aby uzyskać listę dostępnych języków, wpisz **{{ prefix }} language**.

Aby otrzymać pomoc dotyczącą poszczególnej komendy, wpisz **{{ prefix }} help [command]**.

Aby otrzymać listę dostępnych komend, wpisz **{{ prefix }} list**.

Po więcej informacji wejdź na repozytorium GitHub: https://github.com/sszczep/Glocord.`,
        noHelpPage: 'ta komenda nie ma strony z pomocą.'
      },
      list: {
        description: 'lista dostępnych komend',
        message:
`Lista dostępnych komend:
{{ listing }}`
      },
      language: {
        description: 'pokaż listę dostępnych języków bądź zmień domyślny',
        message: 'dostępne języki: **{{ languages }}**.',
        changed: 'pomyślnie zmieniono język',
        noLanguage:
`ten język nie jest na razie obsługiwany.

Dostępne języki: **{{ languages }}**.`
      },
      webhooks: {
        description: 'pokaż info o webhookach',
        help:
`Aby otrzymywać powiadomienia, musisz dodać webhooka do swojej tablicy Glo.

**1)** Udaj się do panelu ustawień, wybierz *Webhooks* i dodaj nowy,
**2)** Wprowadź *url* webhooka i *secret* i wszystko powinno zacząć działać!

Możesz również wybrać jakiego rodzaju powiadomienia chcesz otrzymywać.`,
        message:
`dane webhooków
URL: **{{ url }}**
Secret: **{{ secret }}**

Podaj powyższe wartości w ustawieniach tablicy aby zacząć otrzymywać powiadomienia!`
      },
      regenerateSecret: {
        description: 'ponownie wygeneruj secret dla webhooków',
        message: 'twój nowy secret: **{{ secret }}**'
      }
    },
    webhooks: {
      footer: 'GitKraken Glo z ❤︎',

      boards: {
        description:
`Nazwa tablicy: {{ boardName }}
Zmieniono przez: {{ sender.name }} ({{ sender.username }})
[Otwórz w przeglądarce]({{ url }})`,

        updated: 'Tablica została zaktualizowana',
        archived: 'Tablica została zarchiwizowana',
        unarchived: 'Tablica nie jest już zarchiwizowana',
        deleted: 'Tablica została usunięta',
        labels_updated: '$t(webhooks.boards.updated)',
        members_updated: '$t(webhooks.boards.updated)'
      },

      columns: {
        description:
`Nazwa kolumny: {{ columnName }}
Nazwa tablicy: {{ boardName }}
Zmieniono przez: {{ sender.name }} ({{ sender.username }})
[Otwórz w przeglądarce]({{ url }})`,

        added: 'Nowa kolumna została dodana',
        updated: 'Kolumna została zaktualizowana',
        archived: 'Kolumna została zarchiwizowana',
        unarchived: 'Kolumna nie jest już zarchiwizowana',
        deleted: 'Kolumna została usunieta'
      },

      cards: {
        description:
`Nazwa karty: {{ cardName }}
Nazwa tablicy: {{ boardName }}
Zmieniono przez: {{ sender.name }} ({{ sender.username }})
[Otwórz w przeglądarce]({{ url }})`,

        added: 'Nowa karta została dodana',
        updated: 'Karta została zaktualizowana',
        copied: 'Karta została sklonowana',
        archived: 'Karta zostąła zarchiwizowana',
        unarchived: 'Karta nie jest już zarchiwizowana',
        deleted: 'Karta została usunięta',
        moved_column: 'Karta została przeniesiona do innej kolumny',
        moved_to_board: 'Karta została przeniesiona do innej tablicy',
        moved_from_board: 'Karta została przeniesiona do twojej tablicy',
        labels_updated: '$t(webhooks.cards.updated)',
        assignees_updated: '$t(webhooks.cards.updated)'
      },

      comments: {
        description:
`Nazwa karty: {{ cardName }}
Nazwa tablicy: {{ boardName }}
Zmienione przez: {{ sender.name }} ({{ sender.username }})
[Otwórz w przeglądarce]({{ url }})`,

        added: 'Nowy komentarz został dodany',
        updated: 'Komentarz zostął zaktualizowany',
        deleted: 'Komentarz zostął usunięty'
      }
    }
  }
};
