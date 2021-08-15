# add vendor binaries to the path
export PATH=$PATH:$HOME/vendor/bin

# set a default LANG if it does not exist in the environment
export LANG=${LANG:-en_US.UTF-8}

export DISPLAY=':99.0'
Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &