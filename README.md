# Mean Quote Machine!

A simple application that generates random quotes from [Wikipedia](https://www.wikipedia.org/) with the help of [wikiquotejs](https://www.npmjs.com/package/wikiquotesjs). The application is built upon the MEAN stack with the exception that Angular.js has been switched out with Vue.js.

**Dependencies**

```
Node => 6.9.5
Docker
```

**Installation**

```bash
npm install
```

**Running Application**

```bash
./install_containers.sh start all
```

**Example call**

```bash
curl localhost:3000/get_random_quote
```

**Example respons**

```json
{
  "quote": {
    "text": "I have never seen the slightest scientific proof of the religious ideas of heaven and hell, of future life for individuals, or of a personal God.  As quoted in Jesus : Myth Or Reality?",
    "from": "Jesus : Myth Or Reality?",
    "author": "Thomas Edison"
  }
}
```
