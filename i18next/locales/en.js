module.exports = {
  translation: {
    keywords: {
      none: 'none'
    },

    languages: {
      en: 'English',
      pl: 'Polish'
    },

    buttons: {
      aboutMe: ':question: About me',
      gettingStarted: ':green_book: Getting started',
      settings: ':gear: Settings',
      close: ':heavy_multiplication_x: Close',
      goBack: 'Go back',
      regenerate: 'Regenerate'
    },

    confirmationDialogs: {
      titles: {
        areYouSure: 'Are you sure?'
      },
      texts: {
        regenerateGloSecret: "If you regenerate your secret, you won't be able to receive notifications until you change it in your board settings."
      },
      confirm: 'Yes',
      deny: 'No, I changed my mind'
    },

    messages: {
      home:
`Hi, I'm *Flo*.
How can I help you?`,
      aboutMe: 
`As you probably know, my name is *Flo*, or as I like to proudly call myself - a *Blazing fast Glo notifier for Slack*.


I've been created by *Sebastian Szczepański*, primarily for *Glo's* contest.


It's worth keeping me around - what could be better than getting real time notifications about your team's tasks?


I also speak many languages. Not all of them, but I'm still learning...


I hope, that I will fulfill all your expactions.


It was nice getting to know you :heart:


<https://github.com/sszczep/Flo|Flo on GitHub>
<https://sszczep.github.io/Flo/|Official website>`,
      gettingStarted:
`Got stuck, huh? Don't worry.

You'll find the Getting Started guide <https://sszczep.github.io/Flo/#getting-started|here>.`,
      settings: {
        header: 'What would you like to change?',
        chooseLanguage: 'Change a language',
        GloUrl: "Glo's webhooks' URL",
        GloSecret: "Glo's webhooks' secret"
      }
    },

    notifications: {
      glo: {
        boards: {
          archived: {
            title: '*{{ sender.name }}* archived *{{ board.name }}* board.'
          },
          unarchived: {
            title: '*{{ sender.name }}* unarchived *{{ board.name }}* board.'
          },
          updated: {
            title: "*{{ sender.name }}* changed *{{ board.previous.name }}* board's name.",
            content:
`*Previous name:* {{ board.previous.name }}
*Current name:* {{ board.name }}`
          },
          deleted: {
            title: '*{{ sender.name }}* deleted *{{ board.name }}* board.'
          },
          labels_updated: {
            added: {
              title: '*{{ sender.name }}* created new label in *{{ board.name }}* board.',
              content:
`*Name:* {{ label.name }}
*Color:* R{{ label.color.r }} G{{ label.color.g }} B{{ label.color.b}}`
            },
            updated: {
              title: '*{{ sender.name }}* updated *{{ label.previous.name }}* label in *{{ board.name }}* board.',
              previous:
`*Previous label:*
*Name:* {{ label.previous.name }}
*Color:* R{{ label.previous.color.r }} G{{ label.previous.color.g }} B{{ label.previous.color.b}}`,
              current:
`*Current label:*
*Name:* {{ label.name }}
*Color:* R{{ label.color.r }} G{{ label.color.g }} B{{ label.color.b}}`
            },
            deleted: {
              title: '*{{ sender.name }}* removed *{{ label.name }}* label from *{{ board.name }}* board.'
            }
          },
          members_updated: {
            invited: {
              title: '*{{ sender.name }}* invited *{{ member.name }}* (_{{ member.role }}_) to *{{ board.name }}* board.'
            },
            joined: {
              title: '*{{ member.name }}* joined *{{ board.name }}* board!'
            },
            updated: {
              title: "*{{ member.name }}'s* role in *{{ board.name }}* board has been changed to _{{ member.role }}_ by *{{ sender.name }}*."
            },
            removed: {
              title: '*{{ sender.name }}* kicked *{{ member.name }}* from *{{ board.name }}* board :cry:.'
            },
            members:
`*Present members:*
{{ members}}`,
            invitedMembers:
`*Invited members:*
{{ members }}`,
            noInvitedMembers: 'there are no invited members for now.'
          }
        },
        columns: {
          added: {
            title: '*{{ sender.name }}* added new column named *{{ column.name }}* in *{{ board.name }}* board.'
          },
          updated: {
            title: '*{{ sender.name }}* renamed *{{ column.previous.name }}* column in *{{ board.name }}* board.',
            content:
`*Previous name:* {{ column.previous.name }}
*Current name:* {{ column.name }}`
          },
          archived: {
            title: '*{{ sender.name }}* archived *{{ column.name }}* column in *{{ board.name }}* board.'
          },
          unarchived: {
            title: '*{{ sender.name }}* unarchived *{{ column.name }}* column in *{{ board.name }}* board.'
          },
          deleted: {
            title: '*{{ sender.name }}* deleted *{{ column.name }}* column in *{{ board.name }}* board.'
          }
        },
        cards: {
          added: {
            title: '*{{ sender.name }}* added new card named *{{ card.name }}* in *{{ board.name }}*.'
          },
          updated: {
            title: '*{{ sender.name }}* made changes to *{{ card.previous.name }}* card in *{{ board.name }}* board.',
            previous:
`*Previous name:* {{ card.previous.name}}
*Previous description:* 
{{ card.previous.description.text }}`,
            current:
`*Current name:* {{ card.name }}
*Current description:* 
{{ card.description.text }}`
          },
          copied: {
            title: '*{{ sender.name }}* duplicated a card in *{{ board.name }}* and saved it as *{{ card.name }}*.'
          },
          archived: {
            title: '*{{ sender.name }}* archived *{{ card.name }}* card in *{{ board.name }}* board.'
          },
          unarchived: {
            title: '*{{ sender.name }}* unarchived *{{ card.name }}* card in *{{ board.name }}* board.'
          },
          deleted: {
            title: '*{{ sender.name }}* deleted *{{ card.name }}* card from *{{ board.name }}* board.'
          },
          moved_to_board: {
            title: '*{{ sender.name }}* moved *{{ card.name }}* card outside of *{{ board.name }}* board.'
          },
          moved_from_board: {
            title: '*{{ sender.name }}* moved *{{ card.name }}* card to *{{ board.name }}* board.',
            description:
`*Description:*
{{ description }}`,
            details:
`*Labels:* {{ labels }}
*Assignees:* {{ assignees }}
*Completed tasks:* {{ tasks }}
*Attachments:* {{ attachments }}
*Comments:* {{ comments }}
`
          },
          labels_updated: {
            title: "*{{ sender.name }}* changed *{{ card.name }}* card's labels in *{{ board.name }}* board.",
            content:
`*Added:* {{ added }}
*Removed:* {{ removed }}`,
            noRemoved: '_no labels have been removed_',
            noAdded: '_no labels have been added_'
          },
          assignees_updated: {
            title: "*{{ sender.name }}* changes *{{ card.name }}* card's assignees in *{{ board.name }}* board.",
            content:
`*Added:* {{ added }}
*Removed:* {{ removed }}`,
            noRemoved: '_no assignees have been removed_',
            noAdded: '_no assignees have been added_'
          }
        },
        comments: {
          added: {
            title: '*{{ sender.name }}* added new comment to *{{ card.name }}* card in *{{ board.name }}* board.',
            content: '*Content:* {{ comment.text }}'
          },
          updated: {
            title: '*{{ sender.name }}* updated comment in *{{ card.name }}* card in *{{ board.name }}* board.',
            previous:
`*Previous:*
{{ comment.previous.text }}`,
            current:
`*Current:*
{{ comment.text }}`
          },
          deleted: {
            title: '*{{ sender.name }}* deleted comment from *{{ card.name }}* card in *{{ board.name }}* board.'
          }
        }
      }
    }
  }
};
