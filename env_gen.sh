# If you are using a development env ensure to execute this script to 
# replace its values with the ones in the .env.example and replicate 
# with another file
copy_envs() {
  for env in .env .env.development .env.test; 
    do cp .env.example $env; 
    done
}

if [ ! -f .env ]; then
  touch .env .env.development .env.test 
  copy_envs
else
  cp .env.development .env.example 
  rm -f .env .env.development .env.test
  copy_envs

  for env in .env .env.development .env.test; do
    if [ -f $env ]; then
      sed -i '/NODE_ENV/d' $env
      case $env in
        .env) echo "NODE_ENV=production" >> $env;;
        .env.development) echo "NODE_ENV=development" >> $env;;
        .env.test) echo "NODE_ENV=test" >> $env;;
      esac
    fi
  done
  sed -i 's/=[^=]*$/=/' .env.example
fi
