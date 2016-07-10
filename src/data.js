var animals = [
  {"aardvark": ["calf", "cub"]},
  {"alligator": ["hatchling"]},
  {"alpaca": ["cria"]},
  {"anteater": ["pup"]},
  {"antelope": ["calf"]},
  {"ant": ["antling"]},
  {"ape": ["baby"]},
  {"armadillo": ["pup"]},
  {"baboon": ["infant"]},
  {"bat": ["pup"]},
  {"bear": ["cub"]},
  {"bee": ["larva"]},
  {"beluga": ["calf"]},
  {"bird": ["hatchling", "chick"]},
  {"boar": ["piglet", "shoat", "farrow"]},
  {"bobcat": ["kitten", "cub"]},
  {"butterfly": ["caterpillar", "larva", "pupa", "chrysalis"]},
  {"camel": ["calf"]},
  {"caribou": ["calf", "fawn"]},
  {"cat": ["kitten"]},
  {"cattle": ["calf"]},
  {"cheetah": ["cub"]},
  {"chicken": ["chick", "pullet", "cockrell"]},
  {"clam": ["larva"]},
  {"cockroach": ["nymph"]},
  {"coyote": ["pup", "whelp"]},
  {"crane": ["chick"]},
  {"crocodile": ["hatchling"]},
  {"crow": ["chick"]},
  {"deer": ["fawn"]},
  {"dinosaur": ["hatchling", "juvenile"]},
  {"dog": ["pup"]},
  {"dolphin": ["pup", "calf"]},
  {"donkey": ["colt", "foal"]},
  {"dove": ["squab", "chick"]},
  {"duck": ["duckling"]},
  {"eagle": ["fledgling", "eaglet"]},
  {"echidna": ["puggle"]},
  {"eel": ["larva", "juvenile"]},
  {"elephant": ["calf"]},
  {"fish": ["fry", "fingerling"]},
  {"fly": ["maggot"]},
  {"fox": ["kit", "cub", "pup"]},
  {"frog": ["tadpole", "polliwog", "froglet"]},
  {"gerbil": ["pup"]},
  {"giraffe": ["calf"]},
  {"goat": ["kid", "billy"]},
  {"goose": ["gosling"]},
  {"gorilla": ["infant"]},
  {"grasshopper": ["nymph"]},
  {"guinea pig": ["pig", "pup"]},
  {"gull": ["chick"]},
  {"hamster": ["pup"]},
  {"hare": ["leveret"]},
  {"hawk": ["eyas"]},
  {"hedgehog": ["piglet", "pup"]},
  {"hog": ["shoat", "farrow"]},
  {"honey badger": ["kit", "cub"]},
  {"horse": ["foal", "colt", "stat", "stag"]},
  {"human": ["baby", "infant", "toddler"]},
  {"hyena": ["cub"]},
  {"jellyfish": ["ephyna"]},
  {"kangaroo": ["joey"]},
  {"koala": ["joey"]},
  {"lemur": ["baby", "infant"]},
  {"leopard": ["cub"]},
  {"llama": ["cria"]},
  {"monkey": ["infant"]},
  {"owl": ["owlet", "fledgling"]},
  {"ox": ["stot", "calf"]},
  {"oyster": ["spat"]},
  {"panda": ["cub"]},
  {"pig": ["piglet"]},
  {"pigeon": ["squab", "squeaker"]},
  {"rabbit": ["kitten", "bunny", "kit"]},
  {"reindeer": ["calf"]},
  {"shark": ["pup"]},
  {"skunk": ["kit"]},
  {"snake": ["snakelet", "neonate", "hatchling"]},
  {"spider": ["spiderling"]},
  {"squirrel": ["pup", "kit", "kitten"]},
  {"swan": ["sygnet", "flapper"]},
  {"tiger": ["cub", "whelp"]},
  {"turtle": ["hatchling"]},
  {"walrus": ["cub", "pup"]},
  {"whale": ["calf"]},
  {"wolf": ["pup", "whelp"]},
  {"zebra": ["colt", "foal"]},
]


function keyToQuestion(question) {
  var key = "What is a baby " + Object.keys(question)[0] + " called?"
  var data = {}
  data[key] = question[Object.keys(question)[0]]
  return data
}


function getValues(hash) {
  return hash[Object.keys(hash)]
}


// This is done in a linear time O(n) without recursion
// memory complexity is O(1) or O(n) if mutable param is set to false
function flatten(array, mutable) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = '[object Array]';

    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;

    if (!array.length) {
        return result;
    }

    node = nodes.pop();

    do {
        if (toString.call(node) === arrayTypeStr) {
            nodes.push.apply(nodes, node);
        } else {
            result.push(node);
        }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse(); // we reverse result to restore the original order
    return result;
}


exports.animals = animals
// exports.answers = flatten(animals.map(Object.keys));
exports.answers = flatten(animals.map(getValues)).filter(function(item, i, arr) {
  return arr.indexOf(item) === i;
});
exports.questions = animals.map(keyToQuestion);
