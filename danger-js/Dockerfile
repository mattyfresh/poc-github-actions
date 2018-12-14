FROM node:8

LABEL "com.github.actions.name"="dangerjs"
LABEL "com.github.actions.description"="run dangerjs pr checks"
LABEL "com.github.actions.icon"="mic"
LABEL "com.github.actions.color"="purple"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]