#!/bin/bash

REMOTE_HOST=mcmullin@www.twistylittlemaze.net
REMOTE_PATH=twistylittlemaze.net/sandbox/CB-Tracker-dev/IE-CB-Tracker

scp favicon.ico $REMOTE_HOST:$REMOTE_PATH
scp *.html $REMOTE_HOST:$REMOTE_PATH
scp *.css $REMOTE_HOST:$REMOTE_PATH
scp *.js $REMOTE_HOST:$REMOTE_PATH
