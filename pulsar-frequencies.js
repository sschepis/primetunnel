
export function organizePulsarsByPrime(pulsarData) {
  const result = {};
  
  pulsarData.forEach(pulsar => {
    // Handle different formats of prime data
    let primes = [];
    
    if (Array.isArray(pulsar.prime)) {
      // If prime is an array, add each prime value
      primes = pulsar.prime;
    } else if (pulsar.prime !== undefined) {
      // If prime is a single value
      primes = [pulsar.prime];
    }
    
    // Add pulsar to each of its prime entries
    primes.forEach(prime => {
      const primeKey = prime.toString();
      if (!result[primeKey]) {
        result[primeKey] = [];
      }
      result[primeKey].push(pulsar);
    });
  });
  
  return result;
}

export const pulsarFrequencies = [
  {
    "PSRJ": "J0002+6216",
    "Frequency_Hz": 8.6682478274,
    "prime": [
      3,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0006+1834",
    "Frequency_Hz": 1.4414455969602795,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0007+7303",
    "Frequency_Hz": 3.165827392,
    "prime": 3
  },
  {
    "PSRJ": "J0011+08",
    "Frequency_Hz": 0.3917159902384375,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0012+5431",
    "Frequency_Hz": 0.33054565343,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0014+4746",
    "Frequency_Hz": 0.805997239145,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0021-0909",
    "Frequency_Hz": 0.43212768588,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0023+0923",
    "Frequency_Hz": 327.8470205611185,
    "prime": [
      2,
      2,
      2,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204C",
    "Frequency_Hz": 173.708218965958,
    "prime": [
      2,
      3,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204D",
    "Frequency_Hz": 186.651669856731,
    "prime": [
      11,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204E",
    "Frequency_Hz": 282.779107035,
    "prime": 283
  },
  {
    "PSRJ": "J0024-7204F",
    "Frequency_Hz": 381.158663656311,
    "prime": [
      3,
      127
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204G",
    "Frequency_Hz": 247.501525096385,
    "prime": [
      2,
      2,
      2,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204H",
    "Frequency_Hz": 311.49341784423,
    "prime": 311
  },
  {
    "PSRJ": "J0024-7204I",
    "Frequency_Hz": 286.94469953049,
    "prime": [
      7,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204J",
    "Frequency_Hz": 476.04685844061,
    "prime": [
      2,
      2,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204L",
    "Frequency_Hz": 230.08774629142,
    "prime": [
      2,
      5,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204M",
    "Frequency_Hz": 271.98722878874,
    "prime": [
      2,
      2,
      2,
      2,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204N",
    "Frequency_Hz": 327.44431861739,
    "prime": [
      3,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204O",
    "Frequency_Hz": 378.308788360098,
    "prime": [
      2,
      3,
      3,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204P",
    "Frequency_Hz": 274.49748,
    "prime": [
      2,
      137
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204Q",
    "Frequency_Hz": 247.94323741892,
    "prime": [
      2,
      2,
      2,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204R",
    "Frequency_Hz": 287.3181194693,
    "prime": [
      7,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204S",
    "Frequency_Hz": 353.306209385356,
    "prime": 353
  },
  {
    "PSRJ": "J0024-7204T",
    "Frequency_Hz": 131.77869947406,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204U",
    "Frequency_Hz": 230.264772211776,
    "prime": [
      2,
      5,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204V",
    "Frequency_Hz": 207.892963,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204W",
    "Frequency_Hz": 425.1077962532,
    "prime": [
      5,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204X",
    "Frequency_Hz": 209.57669463535,
    "prime": [
      2,
      3,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204Y",
    "Frequency_Hz": 455.23717843241,
    "prime": [
      5,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204Z",
    "Frequency_Hz": 219.5656060346,
    "prime": [
      2,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204aa",
    "Frequency_Hz": 543.4782608695652,
    "prime": [
      3,
      181
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204ab",
    "Frequency_Hz": 269.93179806134,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204ac",
    "Frequency_Hz": 364.9635036496351,
    "prime": [
      5,
      73
    ],
    "derived": true
  },
  {
    "PSRJ": "J0024-7204ad",
    "Frequency_Hz": 267.379679144385,
    "prime": [
      3,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J0026+6320",
    "Frequency_Hz": 3.1411201226,
    "prime": 3
  },
  {
    "PSRJ": "J0026-1955",
    "Frequency_Hz": 0.7656088504383111,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0030+0451",
    "Frequency_Hz": 205.530695938456,
    "prime": [
      2,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J0032+6946",
    "Frequency_Hz": 27.1711189496937,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0033+57",
    "Frequency_Hz": 3.1746031746031744,
    "prime": 3
  },
  {
    "PSRJ": "J0033+61",
    "Frequency_Hz": 1.0964912280701753,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0034+69",
    "Frequency_Hz": 27.170871087258707,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0034-0534",
    "Frequency_Hz": 532.7134297490177,
    "prime": [
      13,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J0034-0721",
    "Frequency_Hz": 1.060499976,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0036-1033",
    "Frequency_Hz": 1.1110996433282367,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0038-2501",
    "Frequency_Hz": 3.8921643555216487,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0039+35",
    "Frequency_Hz": 1.8632383081796162,
    "prime": 2
  },
  {
    "PSRJ": "J0040+5716",
    "Frequency_Hz": 0.8942741320036,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0040-7326",
    "Frequency_Hz": 2.50842466468,
    "prime": 3
  },
  {
    "PSRJ": "J0040-7335",
    "Frequency_Hz": 6.88618772429,
    "prime": 7
  },
  {
    "PSRJ": "J0040-7337",
    "Frequency_Hz": 16.6976793,
    "prime": 17
  },
  {
    "PSRJ": "J0043-73",
    "Frequency_Hz": 1.066741330241,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0044-7314",
    "Frequency_Hz": 2.5194409506,
    "prime": 3
  },
  {
    "PSRJ": "J0045-7042",
    "Frequency_Hz": 1.5814382167961567,
    "prime": 2
  },
  {
    "PSRJ": "J0045-7319",
    "Frequency_Hz": 1.0795919386809352,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0048+3412",
    "Frequency_Hz": 0.821629025162,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0048-7317",
    "Frequency_Hz": 12.608085313,
    "prime": 13
  },
  {
    "PSRJ": "J0050+03",
    "Frequency_Hz": 0.7317644303945674,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0051+0423",
    "Frequency_Hz": 2.8190295772583247,
    "prime": 3
  },
  {
    "PSRJ": "J0052-72",
    "Frequency_Hz": 5.22337600249,
    "prime": 5
  },
  {
    "PSRJ": "J0054+66",
    "Frequency_Hz": 0.7194244604316548,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0054+6650",
    "Frequency_Hz": 0.719311913668,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0054+6946",
    "Frequency_Hz": 1.200607994501,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0054-7228",
    "Frequency_Hz": 3.43707814666,
    "prime": 3
  },
  {
    "PSRJ": "J0055+5117",
    "Frequency_Hz": 0.472774981134,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0056+4756",
    "Frequency_Hz": 2.11847951725,
    "prime": 2
  },
  {
    "PSRJ": "J0057-7201",
    "Frequency_Hz": 1.3548989113675298,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0058+4950",
    "Frequency_Hz": 1.00399242379,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0058+6125",
    "Frequency_Hz": 1.5698587127158556,
    "prime": 2
  },
  {
    "PSRJ": "J0058-7218",
    "Frequency_Hz": 45.942987,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J0059+69",
    "Frequency_Hz": 0.8726764988218868,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0100+8023",
    "Frequency_Hz": 0.6695228876381062,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0100-7211",
    "Frequency_Hz": 0.12468218511015423,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0101-6422",
    "Frequency_Hz": 388.6284256881015,
    "prime": 389
  },
  {
    "PSRJ": "J0102+4839",
    "Frequency_Hz": 337.36912025226,
    "prime": 337
  },
  {
    "PSRJ": "J0102+6537",
    "Frequency_Hz": 0.595534363281,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0103+54",
    "Frequency_Hz": 2.8224349710982657,
    "prime": 3
  },
  {
    "PSRJ": "J0104+64",
    "Frequency_Hz": 0.7215007215007215,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0105-7208",
    "Frequency_Hz": 3.2601205007,
    "prime": 3
  },
  {
    "PSRJ": "J0106+4855",
    "Frequency_Hz": 12.02540173638,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0107+1322",
    "Frequency_Hz": 0.8351546664684566,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0108+6608",
    "Frequency_Hz": 0.7790225779,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0108+6905",
    "Frequency_Hz": 0.933603858245,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0108-1431",
    "Frequency_Hz": 1.2382909035,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0109+11",
    "Frequency_Hz": 2.3110700254217704,
    "prime": 2
  },
  {
    "PSRJ": "J0110-22",
    "Frequency_Hz": 0.7923930269413629,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0110-2223",
    "Frequency_Hz": 0.79241833567,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0111+6624",
    "Frequency_Hz": 0.23245693423,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0111-7131",
    "Frequency_Hz": 1.4523452589200523,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0113-7220",
    "Frequency_Hz": 3.068585813017896,
    "prime": 3
  },
  {
    "PSRJ": "J0115+6325",
    "Frequency_Hz": 1.917709448046311,
    "prime": 2
  },
  {
    "PSRJ": "J0117+5914",
    "Frequency_Hz": 9.85813488508,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0120+1837",
    "Frequency_Hz": 0.761391192926,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0121+53",
    "Frequency_Hz": 0.3670014870166251,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0122+1416",
    "Frequency_Hz": 0.7199455145234608,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0125+62",
    "Frequency_Hz": 0.5854012632959262,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0125-2327",
    "Frequency_Hz": 272.081088484952,
    "prime": [
      2,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J0129+36",
    "Frequency_Hz": 0.9182736455463728,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0131-7310",
    "Frequency_Hz": 2.8725392936619896,
    "prime": 3
  },
  {
    "PSRJ": "J0133-6957",
    "Frequency_Hz": 2.157619537032614,
    "prime": 2
  },
  {
    "PSRJ": "J0134-2937",
    "Frequency_Hz": 7.301314218241,
    "prime": 7
  },
  {
    "PSRJ": "J0137+1654",
    "Frequency_Hz": 2.4110154473759713,
    "prime": 2
  },
  {
    "PSRJ": "J0137+6349",
    "Frequency_Hz": 1.39282996541,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0139+3336",
    "Frequency_Hz": 0.8013071205734037,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0139+5621",
    "Frequency_Hz": 0.56327117338,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0139+5814",
    "Frequency_Hz": 3.6703897382,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0141+6009",
    "Frequency_Hz": 0.8176959072274,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0141+63",
    "Frequency_Hz": 21.419743434313144,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J0141+6303",
    "Frequency_Hz": 21.422324384511,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J0146+31",
    "Frequency_Hz": 1.065984436627225,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0146+6145",
    "Frequency_Hz": 0.115088121,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0147+5922",
    "Frequency_Hz": 5.093688844679,
    "prime": 5
  },
  {
    "PSRJ": "J0149+29",
    "Frequency_Hz": 0.37678975131876413,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0151-0635",
    "Frequency_Hz": 0.68275000063,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0152+0948",
    "Frequency_Hz": 0.36408027678838967,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0152-1637",
    "Frequency_Hz": 1.200850855046,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0154+1833",
    "Frequency_Hz": 422.90991368608,
    "prime": [
      3,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J0156+3949",
    "Frequency_Hz": 0.55201023568,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0157+6212",
    "Frequency_Hz": 0.425216180759,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0158+21",
    "Frequency_Hz": 1.9790223629527015,
    "prime": 2
  },
  {
    "PSRJ": "J0201+7005",
    "Frequency_Hz": 0.741188488948,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0203-0150",
    "Frequency_Hz": 193.2993976116,
    "prime": 193
  },
  {
    "PSRJ": "J0205+6449",
    "Frequency_Hz": 15.21701089718,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0206-4028",
    "Frequency_Hz": 1.585913395966,
    "prime": 2
  },
  {
    "PSRJ": "J0209+4331",
    "Frequency_Hz": 1.157564675162,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0209+5759",
    "Frequency_Hz": 0.93993241362,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0210+5845",
    "Frequency_Hz": 0.566181225686,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0211+4235",
    "Frequency_Hz": 2.851188011344,
    "prime": 3
  },
  {
    "PSRJ": "J0211-8159",
    "Frequency_Hz": 0.309406057802,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0212+5222",
    "Frequency_Hz": 2.65684439046,
    "prime": 3
  },
  {
    "PSRJ": "J0214+5222",
    "Frequency_Hz": 40.691271761865,
    "prime": 41
  },
  {
    "PSRJ": "J0215+6218",
    "Frequency_Hz": 1.821892452777,
    "prime": 2
  },
  {
    "PSRJ": "J0218+4232",
    "Frequency_Hz": 430.4610545457476,
    "prime": [
      2,
      5,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J0220+3626",
    "Frequency_Hz": 0.9711566475672525,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0227+3356",
    "Frequency_Hz": 0.806384981978,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0229+20",
    "Frequency_Hz": 1.2393109431156277,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0231+7026",
    "Frequency_Hz": 0.681746765985,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0241+16",
    "Frequency_Hz": 0.6470816617057072,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0242+62",
    "Frequency_Hz": 1.6891891891891893,
    "prime": 2
  },
  {
    "PSRJ": "J0243+6027",
    "Frequency_Hz": 0.678886625933469,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0244+14",
    "Frequency_Hz": 0.4699027301348621,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0248+4230",
    "Frequency_Hz": 384.49193525267,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0248+6021",
    "Frequency_Hz": 4.6063,
    "prime": 5
  },
  {
    "PSRJ": "J0250+5854",
    "Frequency_Hz": 0.04248922536001456,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0251+2606",
    "Frequency_Hz": 393.46001048594,
    "prime": [
      3,
      131
    ],
    "derived": true
  },
  {
    "PSRJ": "J0255-5304",
    "Frequency_Hz": 2.233596265225,
    "prime": 2
  },
  {
    "PSRJ": "J0301+35",
    "Frequency_Hz": 1.7604394056756567,
    "prime": 2
  },
  {
    "PSRJ": "J0302+2252",
    "Frequency_Hz": 0.8283871715962606,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0304+1932",
    "Frequency_Hz": 0.72067625947,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0305+11",
    "Frequency_Hz": 1.1599582415033058,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0307+7443",
    "Frequency_Hz": 316.8478768178,
    "prime": 317
  },
  {
    "PSRJ": "J0312-0921",
    "Frequency_Hz": 269.953947494294,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0317+13",
    "Frequency_Hz": 0.5065086359722434,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0318+0253",
    "Frequency_Hz": 192.68371552268,
    "prime": 193
  },
  {
    "PSRJ": "J0323+3944",
    "Frequency_Hz": 0.3298074763345,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0324+5239",
    "Frequency_Hz": 2.9707067787801233,
    "prime": 3
  },
  {
    "PSRJ": "J0325+6744",
    "Frequency_Hz": 0.732773180015,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0329+1654",
    "Frequency_Hz": 1.1194196928312363,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0332+5434",
    "Frequency_Hz": 1.39954153872,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0335+4555",
    "Frequency_Hz": 3.7147027882896,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0335+6623",
    "Frequency_Hz": 0.56755806947,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0337+1715",
    "Frequency_Hz": 365.953363096,
    "prime": [
      2,
      3,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J0337+79",
    "Frequency_Hz": 0.48633164900472226,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0340+4130",
    "Frequency_Hz": 303.0909794113198,
    "prime": [
      3,
      101
    ],
    "derived": true
  },
  {
    "PSRJ": "J0341+5711",
    "Frequency_Hz": 0.5296610169491526,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0343+06",
    "Frequency_Hz": 0.9924179270374339,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0343+5312",
    "Frequency_Hz": 0.516935299969,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0343-3000",
    "Frequency_Hz": 0.385055647243,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0344-0901",
    "Frequency_Hz": 0.815656977709,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0348+0432",
    "Frequency_Hz": 25.560636549613,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0349+2340",
    "Frequency_Hz": 0.41309153158229345,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0355+28",
    "Frequency_Hz": 10.604453870625663,
    "prime": 11
  },
  {
    "PSRJ": "J0357+3205",
    "Frequency_Hz": 2.251722292,
    "prime": 2
  },
  {
    "PSRJ": "J0357+5236",
    "Frequency_Hz": 5.075366707885,
    "prime": 5
  },
  {
    "PSRJ": "J0358+4155",
    "Frequency_Hz": 4.415316459453,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0358+5413",
    "Frequency_Hz": 6.3945110925,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0358+6627",
    "Frequency_Hz": 10.92827132616,
    "prime": 11
  },
  {
    "PSRJ": "J0359+5414",
    "Frequency_Hz": 12.5901403227,
    "prime": 13
  },
  {
    "PSRJ": "J0401-7608",
    "Frequency_Hz": 1.83400620071,
    "prime": 2
  },
  {
    "PSRJ": "J0402+4825",
    "Frequency_Hz": 1.95238351856,
    "prime": 2
  },
  {
    "PSRJ": "J0405+3347",
    "Frequency_Hz": 15.6362508979,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0406+30",
    "Frequency_Hz": 384.61538461538464,
    "prime": [
      5,
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0406+3039",
    "Frequency_Hz": 383.339448073778,
    "prime": 383
  },
  {
    "PSRJ": "J0406+6138",
    "Frequency_Hz": 1.681870311647,
    "prime": 2
  },
  {
    "PSRJ": "J0407+1607",
    "Frequency_Hz": 38.90747801727492,
    "prime": [
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0408+551",
    "Frequency_Hz": 0.5443658138268916,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0408+552",
    "Frequency_Hz": 1.3262599469496021,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0410-31",
    "Frequency_Hz": 0.5323396326856534,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0413+58",
    "Frequency_Hz": 1.455604075691412,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0414+31",
    "Frequency_Hz": 0.9250693802035153,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0415+6111",
    "Frequency_Hz": 2.27174930502,
    "prime": 2
  },
  {
    "PSRJ": "J0415+6954",
    "Frequency_Hz": 2.559409722714,
    "prime": 3
  },
  {
    "PSRJ": "J0417+35",
    "Frequency_Hz": 1.528117359413203,
    "prime": 2
  },
  {
    "PSRJ": "J0417+61",
    "Frequency_Hz": 2.271266435451744,
    "prime": 2
  },
  {
    "PSRJ": "J0418+5732",
    "Frequency_Hz": 0.11015171148959743,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0418+6635",
    "Frequency_Hz": 343.620798,
    "prime": [
      2,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J0418-4154",
    "Frequency_Hz": 1.32079643042,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0419+44",
    "Frequency_Hz": 0.8058017727639,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0420+4451",
    "Frequency_Hz": 0.805719788443,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0420-5022",
    "Frequency_Hz": 0.2896029058,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0421+3255",
    "Frequency_Hz": 1.110981496603174,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0421-0345",
    "Frequency_Hz": 0.4626824858612,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0426+4933",
    "Frequency_Hz": 1.0840405351162061,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0427+4723",
    "Frequency_Hz": 0.463298405496,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0435+2749",
    "Frequency_Hz": 3.064857408039,
    "prime": 3
  },
  {
    "PSRJ": "J0437-4715",
    "Frequency_Hz": 173.6879456649439,
    "prime": [
      2,
      3,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J0447+2447",
    "Frequency_Hz": 333.858342223344,
    "prime": [
      2,
      167
    ],
    "derived": true
  },
  {
    "PSRJ": "J0447-04",
    "Frequency_Hz": 0.45699870669366005,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0448-2749",
    "Frequency_Hz": 2.2200098805,
    "prime": 2
  },
  {
    "PSRJ": "J0449-7031",
    "Frequency_Hz": 2.0869682612107163,
    "prime": 2
  },
  {
    "PSRJ": "J0450-1248",
    "Frequency_Hz": 2.2830307699481,
    "prime": 2
  },
  {
    "PSRJ": "J0451-67",
    "Frequency_Hz": 4.074078314133357,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0452-1759",
    "Frequency_Hz": 1.8216785841,
    "prime": 2
  },
  {
    "PSRJ": "J0452-3418",
    "Frequency_Hz": 0.6005577943559395,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0453+1559",
    "Frequency_Hz": 21.842732951710882,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0454+4529",
    "Frequency_Hz": 0.7198714353384669,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0454+5543",
    "Frequency_Hz": 2.93487997706,
    "prime": 3
  },
  {
    "PSRJ": "J0455-6951",
    "Frequency_Hz": 3.1208774035945863,
    "prime": 3
  },
  {
    "PSRJ": "J0456-69",
    "Frequency_Hz": 8.54167540230928,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0456-7031",
    "Frequency_Hz": 1.2497936696727607,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0457+23",
    "Frequency_Hz": 1.9805902158843334,
    "prime": 2
  },
  {
    "PSRJ": "J0457-6337",
    "Frequency_Hz": 0.40047870082060594,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0457-69",
    "Frequency_Hz": 4.321700654897552,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0458-0505",
    "Frequency_Hz": 0.5309322006703845,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0458-67",
    "Frequency_Hz": 0.8819119851838787,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0459-0210",
    "Frequency_Hz": 0.8825524177584,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0501+4516",
    "Frequency_Hz": 0.173547943,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0502+4654",
    "Frequency_Hz": 1.566010110074,
    "prime": 2
  },
  {
    "PSRJ": "J0502-6617",
    "Frequency_Hz": 1.4466516432369947,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0506+50",
    "Frequency_Hz": 294.98525073746316,
    "prime": [
      5,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J0509+0856",
    "Frequency_Hz": 246.55815713199,
    "prime": [
      13,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J0509+37",
    "Frequency_Hz": 0.400624974960939,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0509+3801",
    "Frequency_Hz": 13.06483380156,
    "prime": 13
  },
  {
    "PSRJ": "J0509-6838",
    "Frequency_Hz": 3.5873976156720486,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0509-6845",
    "Frequency_Hz": 3.2552387452317673,
    "prime": 3
  },
  {
    "PSRJ": "J0511-6508",
    "Frequency_Hz": 3.104992616817,
    "prime": 3
  },
  {
    "PSRJ": "J0514-4002A",
    "Frequency_Hz": 200.37770740535,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002B",
    "Frequency_Hz": 355.0758086851543,
    "prime": [
      5,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002C",
    "Frequency_Hz": 179.700977573318,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002D",
    "Frequency_Hz": 219.5678903917091,
    "prime": [
      2,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002E",
    "Frequency_Hz": 178.7007498973,
    "prime": 179
  },
  {
    "PSRJ": "J0514-4002F",
    "Frequency_Hz": 230.9788885295884,
    "prime": [
      3,
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002G",
    "Frequency_Hz": 262.96413169243715,
    "prime": 263
  },
  {
    "PSRJ": "J0514-4002H",
    "Frequency_Hz": 181.61675232923486,
    "prime": [
      2,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002I",
    "Frequency_Hz": 30.623931990371833,
    "prime": 31
  },
  {
    "PSRJ": "J0514-4002J",
    "Frequency_Hz": 150.7636177237709,
    "prime": 151
  },
  {
    "PSRJ": "J0514-4002K",
    "Frequency_Hz": 213.12872975277068,
    "prime": [
      3,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002L",
    "Frequency_Hz": 337.9748546708125,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002M",
    "Frequency_Hz": 208.42886322897996,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4002N",
    "Frequency_Hz": 179.600926740782,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0514-4408",
    "Frequency_Hz": 3.122357486324,
    "prime": 3
  },
  {
    "PSRJ": "J0517+2212",
    "Frequency_Hz": 4.497079963269,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0518+2431",
    "Frequency_Hz": 0.37922747574,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0518+5125",
    "Frequency_Hz": 1.0958763774218194,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0518+5416",
    "Frequency_Hz": 2.93942447332,
    "prime": 3
  },
  {
    "PSRJ": "J0518-6939",
    "Frequency_Hz": 3.028376157146315,
    "prime": 3
  },
  {
    "PSRJ": "J0518-6946",
    "Frequency_Hz": 0.5915710589240268,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0519+44",
    "Frequency_Hz": 1.941747572815534,
    "prime": 2
  },
  {
    "PSRJ": "J0519-6931",
    "Frequency_Hz": 2.6473525706561194,
    "prime": 3
  },
  {
    "PSRJ": "J0519-6932",
    "Frequency_Hz": 3.799224155274385,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0520-2553",
    "Frequency_Hz": 4.1383499949094,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0521-68",
    "Frequency_Hz": 2.3072271352060483,
    "prime": 2
  },
  {
    "PSRJ": "J0522-6847",
    "Frequency_Hz": 1.4825095545050773,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0523-7125",
    "Frequency_Hz": 3.1007751937984493,
    "prime": 3
  },
  {
    "PSRJ": "J0525+1115",
    "Frequency_Hz": 2.8213705328215,
    "prime": 3
  },
  {
    "PSRJ": "J0525-6607",
    "Frequency_Hz": 0.12426991425375916,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0528+2200",
    "Frequency_Hz": 0.266984253314,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0529-0715",
    "Frequency_Hz": 1.450907946316,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0529-6652",
    "Frequency_Hz": 1.02486651379,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0530-3847",
    "Frequency_Hz": 1.1031415866,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0530-39",
    "Frequency_Hz": 1.1025358324145533,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0532-6639",
    "Frequency_Hz": 1.555832405037748,
    "prime": 2
  },
  {
    "PSRJ": "J0532-69",
    "Frequency_Hz": 0.8701738093868608,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0533+0402",
    "Frequency_Hz": 1.0384023515273,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0533+6759",
    "Frequency_Hz": 227.88594920515,
    "prime": [
      2,
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J0533-4524",
    "Frequency_Hz": 6.357904564289724,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0534+2200",
    "Frequency_Hz": 29.946923,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0534-13",
    "Frequency_Hz": 1.0214504596527068,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0534-6703",
    "Frequency_Hz": 0.5501866414192631,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0534-6905",
    "Frequency_Hz": 1.1865457576539618,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0535-66",
    "Frequency_Hz": 4.750044127909948,
    "prime": 5
  },
  {
    "PSRJ": "J0535-6935",
    "Frequency_Hz": 4.987249348952002,
    "prime": 5
  },
  {
    "PSRJ": "J0536-7543",
    "Frequency_Hz": 0.8026608259746,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0537-69",
    "Frequency_Hz": 8.87995289362589,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0537-6910",
    "Frequency_Hz": 62.0261895958,
    "prime": [
      2,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J0538+2817",
    "Frequency_Hz": 6.985276348019,
    "prime": 7
  },
  {
    "PSRJ": "J0540+3207",
    "Frequency_Hz": 1.9074104804576257,
    "prime": 2
  },
  {
    "PSRJ": "J0540+4542",
    "Frequency_Hz": 2.49288614496,
    "prime": 2
  },
  {
    "PSRJ": "J0540-6919",
    "Frequency_Hz": 19.7746860321,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0540-7125",
    "Frequency_Hz": 0.7775961516206588,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0542-68",
    "Frequency_Hz": 2.3518952748072035,
    "prime": 2
  },
  {
    "PSRJ": "J0543+2329",
    "Frequency_Hz": 4.06545762605,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0543-6851",
    "Frequency_Hz": 1.4105283812410299,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0545-03",
    "Frequency_Hz": 0.9311593865521961,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0546+2441",
    "Frequency_Hz": 0.3516359864268509,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0550+09",
    "Frequency_Hz": 0.5730659025787965,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0553+41",
    "Frequency_Hz": 1.7857142857142856,
    "prime": 2
  },
  {
    "PSRJ": "J0553+4111",
    "Frequency_Hz": 1.78733106975,
    "prime": 2
  },
  {
    "PSRJ": "J0554+3107",
    "Frequency_Hz": 2.1507181757,
    "prime": 2
  },
  {
    "PSRJ": "J0555+3948",
    "Frequency_Hz": 0.8719111892188529,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0555-7056",
    "Frequency_Hz": 1.2079656846109295,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0556-67",
    "Frequency_Hz": 1.26494340896177,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0557+1550",
    "Frequency_Hz": 391.18012787837,
    "prime": [
      17,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J0557-2948",
    "Frequency_Hz": 22.913371537668404,
    "prime": 23
  },
  {
    "PSRJ": "J0600-5756",
    "Frequency_Hz": 0.44221088384966617,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0601-0527",
    "Frequency_Hz": 2.52544191354,
    "prime": 3
  },
  {
    "PSRJ": "J0605+3757",
    "Frequency_Hz": 366.575069324831,
    "prime": 367
  },
  {
    "PSRJ": "J0608+00",
    "Frequency_Hz": 0.929195316855603,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0608+1635",
    "Frequency_Hz": 1.05725595863737,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0609+2130",
    "Frequency_Hz": 17.953961540990935,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0610-2100",
    "Frequency_Hz": 258.978475098116,
    "prime": [
      7,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J0611+04",
    "Frequency_Hz": 0.5972181578208704,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0611+1436",
    "Frequency_Hz": 3.699189834167991,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0611+30",
    "Frequency_Hz": 0.7081701591258347,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0612+3721",
    "Frequency_Hz": 3.355903725917,
    "prime": 3
  },
  {
    "PSRJ": "J0612+37216",
    "Frequency_Hz": 2.2529049469,
    "prime": 2
  },
  {
    "PSRJ": "J0613+3731",
    "Frequency_Hz": 1.61499182415,
    "prime": 2
  },
  {
    "PSRJ": "J0613-0200",
    "Frequency_Hz": 326.6005620234831,
    "prime": [
      3,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J0614+2229",
    "Frequency_Hz": 2.9854313983,
    "prime": 3
  },
  {
    "PSRJ": "J0614+83",
    "Frequency_Hz": 0.9622786759045421,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0614-3329",
    "Frequency_Hz": 317.594454701573,
    "prime": [
      2,
      3,
      53
    ],
    "derived": true
  },
  {
    "PSRJ": "J0621+0336",
    "Frequency_Hz": 3.7043334323208,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0621+1002",
    "Frequency_Hz": 34.65740662140411,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J0621+2514",
    "Frequency_Hz": 367.4055519176954,
    "prime": 367
  },
  {
    "PSRJ": "J0622+3749",
    "Frequency_Hz": 3.00112633651,
    "prime": 3
  },
  {
    "PSRJ": "J0623+0340",
    "Frequency_Hz": 1.6293024173701809,
    "prime": 2
  },
  {
    "PSRJ": "J0624-0424",
    "Frequency_Hz": 0.9623924225933,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0625+10",
    "Frequency_Hz": 2.006432622989304,
    "prime": 2
  },
  {
    "PSRJ": "J0627+0649",
    "Frequency_Hz": 2.8858089092882,
    "prime": 3
  },
  {
    "PSRJ": "J0627+0706",
    "Frequency_Hz": 2.10132782494,
    "prime": 2
  },
  {
    "PSRJ": "J0627+16",
    "Frequency_Hz": 0.4587155963302752,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0628+0909",
    "Frequency_Hz": 0.8055282493188061,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0629+2415",
    "Frequency_Hz": 2.098095022707,
    "prime": 2
  },
  {
    "PSRJ": "J0630+19",
    "Frequency_Hz": 0.800929077730167,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0630-0046",
    "Frequency_Hz": 1.469346135923838,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0630-2834",
    "Frequency_Hz": 0.803583001146,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0631+0646",
    "Frequency_Hz": 9.0107183491,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0631+1036",
    "Frequency_Hz": 3.474139356676,
    "prime": 3
  },
  {
    "PSRJ": "J0633+0632",
    "Frequency_Hz": 3.3625291588,
    "prime": 3
  },
  {
    "PSRJ": "J0633+1746",
    "Frequency_Hz": 4.21763962354,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0633-2015",
    "Frequency_Hz": 0.307388623017075,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0635+0533",
    "Frequency_Hz": 29.53643,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0636+5128",
    "Frequency_Hz": 348.55923172059,
    "prime": 349
  },
  {
    "PSRJ": "J0636-23",
    "Frequency_Hz": 2.100840336134454,
    "prime": 2
  },
  {
    "PSRJ": "J0636-3044",
    "Frequency_Hz": 253.4366003000689,
    "prime": [
      11,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J0636-4549",
    "Frequency_Hz": 0.5038805435110182,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0639-0704",
    "Frequency_Hz": 1.013699113957,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0640-0139",
    "Frequency_Hz": 288.892720892735,
    "prime": [
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J0645+5158",
    "Frequency_Hz": 112.94972319066427,
    "prime": 113
  },
  {
    "PSRJ": "J0645+80",
    "Frequency_Hz": 1.520057154148996,
    "prime": 2
  },
  {
    "PSRJ": "J0646+0905",
    "Frequency_Hz": 1.106300583096,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0646-54",
    "Frequency_Hz": 398.40637450199205,
    "prime": [
      2,
      199
    ],
    "derived": true
  },
  {
    "PSRJ": "J0647+0913",
    "Frequency_Hz": 0.8098125781901649,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0648-27",
    "Frequency_Hz": 0.23986567522187577,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0652-0142",
    "Frequency_Hz": 1.0821879334123894,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0653+4706",
    "Frequency_Hz": 210.16660682455,
    "prime": [
      2,
      3,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J0653+8051",
    "Frequency_Hz": 0.8234244415576,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0653-06",
    "Frequency_Hz": 1.2658227848101264,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0656-2228",
    "Frequency_Hz": 0.816490196029,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0656-5449",
    "Frequency_Hz": 5.459799192354,
    "prime": 5
  },
  {
    "PSRJ": "J0658+0022",
    "Frequency_Hz": 1.7752689668690098,
    "prime": 2
  },
  {
    "PSRJ": "J0658+2936",
    "Frequency_Hz": 1.2140327894,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0659+1414",
    "Frequency_Hz": 2.597826562,
    "prime": 3
  },
  {
    "PSRJ": "J0659-36",
    "Frequency_Hz": 1.5698587127158556,
    "prime": 2
  },
  {
    "PSRJ": "J0700+6418",
    "Frequency_Hz": 5.110620788131,
    "prime": 5
  },
  {
    "PSRJ": "J0702-4956",
    "Frequency_Hz": 1.501515953,
    "prime": 2
  },
  {
    "PSRJ": "J0709+0458",
    "Frequency_Hz": 29.045300004132,
    "prime": 29
  },
  {
    "PSRJ": "J0709-5923",
    "Frequency_Hz": 2.0607153342892284,
    "prime": 2
  },
  {
    "PSRJ": "J0711+0931",
    "Frequency_Hz": 0.8236621667256958,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0711-6830",
    "Frequency_Hz": 182.1172346200484,
    "prime": [
      2,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0719-2545",
    "Frequency_Hz": 1.0259264306627,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0720-3125",
    "Frequency_Hz": 0.11917366605486363,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0721-2038",
    "Frequency_Hz": 64.34014845671108,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0723-2050",
    "Frequency_Hz": 1.4054023666975857,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0725-1635",
    "Frequency_Hz": 2.356759664005,
    "prime": 2
  },
  {
    "PSRJ": "J0726-2612",
    "Frequency_Hz": 0.29050272617145834,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0729-1448",
    "Frequency_Hz": 3.97241738638,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0729-1836",
    "Frequency_Hz": 1.96010709456,
    "prime": 2
  },
  {
    "PSRJ": "J0732+2314",
    "Frequency_Hz": 244.490583045,
    "prime": [
      2,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J0733-2345",
    "Frequency_Hz": 0.55671547188,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0734+14",
    "Frequency_Hz": 0.5643340857787811,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0734-1559",
    "Frequency_Hz": 6.4,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0736-6304",
    "Frequency_Hz": 0.20563971182038046,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0737-2202",
    "Frequency_Hz": 3.121390202582,
    "prime": 3
  },
  {
    "PSRJ": "J0737-3039A",
    "Frequency_Hz": 44.054069392744,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J0737-3039B",
    "Frequency_Hz": 0.36056035506,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0738+6904",
    "Frequency_Hz": 0.14646235983,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0738-4042",
    "Frequency_Hz": 2.66722888517,
    "prime": 3
  },
  {
    "PSRJ": "J0740+6620",
    "Frequency_Hz": 346.5319964932129,
    "prime": 347
  },
  {
    "PSRJ": "J0741+17",
    "Frequency_Hz": 0.5780346820809249,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0742+4110",
    "Frequency_Hz": 318.55889711523,
    "prime": [
      11,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J0742+4334",
    "Frequency_Hz": 1.649645949586297,
    "prime": 2
  },
  {
    "PSRJ": "J0742-2822",
    "Frequency_Hz": 5.9960339233,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0744-2525",
    "Frequency_Hz": 10.87,
    "prime": 11
  },
  {
    "PSRJ": "J0745-5353",
    "Frequency_Hz": 4.65465907222,
    "prime": 5
  },
  {
    "PSRJ": "J0746-4529",
    "Frequency_Hz": 0.358291285840478,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0747+6646",
    "Frequency_Hz": 2.45278075482,
    "prime": 2
  },
  {
    "PSRJ": "J0749+5720",
    "Frequency_Hz": 0.8511150531782,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0749-4247",
    "Frequency_Hz": 0.9128643163022,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0750+57",
    "Frequency_Hz": 0.8511580004596253,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0750-6846",
    "Frequency_Hz": 1.09263847505,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0751+1807",
    "Frequency_Hz": 287.457853995106,
    "prime": [
      7,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J0753-0816",
    "Frequency_Hz": 0.4776415968513866,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0754+3231",
    "Frequency_Hz": 0.6933132465193,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0758-1528",
    "Frequency_Hz": 1.46570288145,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0758-30",
    "Frequency_Hz": 0.9157509157509157,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0758-3002",
    "Frequency_Hz": 0.915860185362,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0802-5613",
    "Frequency_Hz": 3.65,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0803-0942",
    "Frequency_Hz": 1.75052694621,
    "prime": 2
  },
  {
    "PSRJ": "J0804-3647",
    "Frequency_Hz": 0.4562071068293168,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0806+08",
    "Frequency_Hz": 0.48470747903640155,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0806-4123",
    "Frequency_Hz": 0.0879477624,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0807-5421",
    "Frequency_Hz": 1.8988170831434,
    "prime": 2
  },
  {
    "PSRJ": "J0808-3937",
    "Frequency_Hz": 1.1542688585871437,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0809-4753",
    "Frequency_Hz": 1.82747670564,
    "prime": 2
  },
  {
    "PSRJ": "J0811+37",
    "Frequency_Hz": 0.8010894816951054,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0812-3905",
    "Frequency_Hz": 2.0721268862392987,
    "prime": 2
  },
  {
    "PSRJ": "J0813+22",
    "Frequency_Hz": 1.881821603312006,
    "prime": 2
  },
  {
    "PSRJ": "J0814+7429",
    "Frequency_Hz": 0.7738491923691,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0815+0939",
    "Frequency_Hz": 1.550000697500314,
    "prime": 2
  },
  {
    "PSRJ": "J0815+4611",
    "Frequency_Hz": 2.3028620453547224,
    "prime": 2
  },
  {
    "PSRJ": "J0818-3049",
    "Frequency_Hz": 1.30934294385712,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0818-3232",
    "Frequency_Hz": 0.4626931850835,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0820-1350",
    "Frequency_Hz": 0.8076686705898,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0820-3826",
    "Frequency_Hz": 8.010414879211,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0820-3921",
    "Frequency_Hz": 0.9314745958536899,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0820-4114",
    "Frequency_Hz": 1.83336352435,
    "prime": 2
  },
  {
    "PSRJ": "J0821-4221",
    "Frequency_Hz": 2.5206048086788,
    "prime": 3
  },
  {
    "PSRJ": "J0821-4300",
    "Frequency_Hz": 8.8652910545,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0823+0159",
    "Frequency_Hz": 1.1562393852218,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0824+0028",
    "Frequency_Hz": 101.40600778116,
    "prime": 101
  },
  {
    "PSRJ": "J0826+2637",
    "Frequency_Hz": 1.88444396743,
    "prime": 2
  },
  {
    "PSRJ": "J0827+53",
    "Frequency_Hz": 74.07407407407408,
    "prime": [
      2,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J0828-3417",
    "Frequency_Hz": 0.54085663363,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0831-4406",
    "Frequency_Hz": 3.2084856130843504,
    "prime": 3
  },
  {
    "PSRJ": "J0834-4159",
    "Frequency_Hz": 8.25642751376,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0834-60",
    "Frequency_Hz": 2.599799815414213,
    "prime": 3
  },
  {
    "PSRJ": "J0835-3707",
    "Frequency_Hz": 1.84704824843,
    "prime": 2
  },
  {
    "PSRJ": "J0835-4510",
    "Frequency_Hz": 11.1946499395,
    "prime": 11
  },
  {
    "PSRJ": "J0836-4233",
    "Frequency_Hz": 1.3542142219430873,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0837+0610",
    "Frequency_Hz": 0.785068262475,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0837-2454",
    "Frequency_Hz": 1.588788773,
    "prime": 2
  },
  {
    "PSRJ": "J0837-4135",
    "Frequency_Hz": 1.330448947619,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0838-2621",
    "Frequency_Hz": 3.2406434977785,
    "prime": 3
  },
  {
    "PSRJ": "J0838-2827",
    "Frequency_Hz": 276.59755044807,
    "prime": 277
  },
  {
    "PSRJ": "J0838-3947",
    "Frequency_Hz": 0.5868731596,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0839-66",
    "Frequency_Hz": 2.2254912215498766,
    "prime": 2
  },
  {
    "PSRJ": "J0840-5332",
    "Frequency_Hz": 1.3877054315079,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0842-4851",
    "Frequency_Hz": 1.551911320029,
    "prime": 2
  },
  {
    "PSRJ": "J0843+0719",
    "Frequency_Hz": 0.7321394579239453,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0843+67",
    "Frequency_Hz": 351.37034434293747,
    "prime": [
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J0843-5022",
    "Frequency_Hz": 4.7857007683163,
    "prime": 5
  },
  {
    "PSRJ": "J0846-3533",
    "Frequency_Hz": 0.895978140521,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0847-4316",
    "Frequency_Hz": 0.16729422251073828,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0848+16",
    "Frequency_Hz": 2.2104332449160036,
    "prime": 2
  },
  {
    "PSRJ": "J0849+8028",
    "Frequency_Hz": 0.624130907903,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0849-6322",
    "Frequency_Hz": 2.7177324827378,
    "prime": 3
  },
  {
    "PSRJ": "J0853-4648",
    "Frequency_Hz": 2.1134678626076813,
    "prime": 2
  },
  {
    "PSRJ": "J0854+5449",
    "Frequency_Hz": 0.811008563879,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0855-3331",
    "Frequency_Hz": 0.7889291664574,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0855-4644",
    "Frequency_Hz": 15.459264408660944,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0855-4658",
    "Frequency_Hz": 1.738911535820253,
    "prime": 2
  },
  {
    "PSRJ": "J0856-6137",
    "Frequency_Hz": 1.03894930369083,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0857+3349",
    "Frequency_Hz": 4.1158869118912085,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0857-4424",
    "Frequency_Hz": 3.0600377901,
    "prime": 3
  },
  {
    "PSRJ": "J0900-3144",
    "Frequency_Hz": 90.011841919354,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0901-4046",
    "Frequency_Hz": 0.013177739873,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0901-4624",
    "Frequency_Hz": 2.262144835535,
    "prime": 2
  },
  {
    "PSRJ": "J0902-6325",
    "Frequency_Hz": 1.514432128865,
    "prime": 2
  },
  {
    "PSRJ": "J0904-4246",
    "Frequency_Hz": 1.0360830564734,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0904-7459",
    "Frequency_Hz": 1.819658192512,
    "prime": 2
  },
  {
    "PSRJ": "J0905-4536",
    "Frequency_Hz": 1.0118582197712,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0905-5127",
    "Frequency_Hz": 2.887587336907,
    "prime": 3
  },
  {
    "PSRJ": "J0905-6019",
    "Frequency_Hz": 2.9338059170789714,
    "prime": 3
  },
  {
    "PSRJ": "J0907-5157",
    "Frequency_Hz": 3.94387060473,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0908-1739",
    "Frequency_Hz": 2.4898771164,
    "prime": 2
  },
  {
    "PSRJ": "J0908-4913",
    "Frequency_Hz": 9.365805353968,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0909-7212",
    "Frequency_Hz": 0.7337347034058,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0910+77",
    "Frequency_Hz": 0.633292169342326,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0911-42",
    "Frequency_Hz": 0.5152949990439989,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0912-3851",
    "Frequency_Hz": 0.655271462729382,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0916-5243",
    "Frequency_Hz": 0.7631001401051858,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0917-4413",
    "Frequency_Hz": 18.90165863944727,
    "prime": 19
  },
  {
    "PSRJ": "J0919-42",
    "Frequency_Hz": 1.2306177701206005,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0919-6040",
    "Frequency_Hz": 0.8217090785795405,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0921+6254",
    "Frequency_Hz": 0.6377575349233,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0921-5202",
    "Frequency_Hz": 103.30777428116949,
    "prime": 103
  },
  {
    "PSRJ": "J0922+0638",
    "Frequency_Hz": 2.322167512743,
    "prime": 2
  },
  {
    "PSRJ": "J0922-4534",
    "Frequency_Hz": 226.42059336958087,
    "prime": [
      2,
      113
    ],
    "derived": true
  },
  {
    "PSRJ": "J0922-4949",
    "Frequency_Hz": 1.0522361493655,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0924-5302",
    "Frequency_Hz": 1.3398655379865,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0924-5814",
    "Frequency_Hz": 1.35225362914,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0925+6103",
    "Frequency_Hz": 167.15383952386,
    "prime": 167
  },
  {
    "PSRJ": "J0927+2345",
    "Frequency_Hz": 1.31252674625,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0927-5242",
    "Frequency_Hz": 3.049236013916713,
    "prime": 3
  },
  {
    "PSRJ": "J0928+06",
    "Frequency_Hz": 0.48534265191225007,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0928+30",
    "Frequency_Hz": 0.4781257470714798,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0930-2301",
    "Frequency_Hz": 0.5533823988982525,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0931-1902",
    "Frequency_Hz": 215.6088104676294,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0932-3217",
    "Frequency_Hz": 0.51769836154033,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0932-5327",
    "Frequency_Hz": 0.22767847553,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0933-4604",
    "Frequency_Hz": 0.2724862462567202,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0934-4154",
    "Frequency_Hz": 1.753127292009969,
    "prime": 2
  },
  {
    "PSRJ": "J0934-5249",
    "Frequency_Hz": 0.6921479136245,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0935+33",
    "Frequency_Hz": 1.0400416016640666,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0936-4750",
    "Frequency_Hz": 1.9135789475698506,
    "prime": 2
  },
  {
    "PSRJ": "J0940-5428",
    "Frequency_Hz": 11.41962341762,
    "prime": 11
  },
  {
    "PSRJ": "J0941-39",
    "Frequency_Hz": 1.7042208245504968,
    "prime": 2
  },
  {
    "PSRJ": "J0941-5244",
    "Frequency_Hz": 1.5184676315758,
    "prime": 2
  },
  {
    "PSRJ": "J0942-5552",
    "Frequency_Hz": 1.5051350173,
    "prime": 2
  },
  {
    "PSRJ": "J0942-5657",
    "Frequency_Hz": 1.2373625970827,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0943+1631",
    "Frequency_Hz": 0.919609716274,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0943+2253",
    "Frequency_Hz": 1.876261648496,
    "prime": 2
  },
  {
    "PSRJ": "J0943-5305",
    "Frequency_Hz": 0.5767012687427913,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0944+4106",
    "Frequency_Hz": 0.448544888919,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J0944-1354",
    "Frequency_Hz": 1.7535732521436,
    "prime": 2
  },
  {
    "PSRJ": "J0945-4833",
    "Frequency_Hz": 3.0158125192796748,
    "prime": 3
  },
  {
    "PSRJ": "J0946+0951",
    "Frequency_Hz": 0.91099098381,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0947+2740",
    "Frequency_Hz": 1.17506907189,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0948-5549",
    "Frequency_Hz": 6.020636333095317,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J0949-6902",
    "Frequency_Hz": 1.5624616118806578,
    "prime": 2
  },
  {
    "PSRJ": "J0951-71",
    "Frequency_Hz": 4.708585635046944,
    "prime": 5
  },
  {
    "PSRJ": "J0952-0607",
    "Frequency_Hz": 707.31444583103,
    "prime": [
      7,
      101
    ],
    "derived": true
  },
  {
    "PSRJ": "J0952-3839",
    "Frequency_Hz": 0.727899551124,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0953+0755",
    "Frequency_Hz": 3.951547269235,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J0954-5430",
    "Frequency_Hz": 2.114763922705,
    "prime": 2
  },
  {
    "PSRJ": "J0954-5754",
    "Frequency_Hz": 206.8135467505745,
    "prime": [
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J0955-3947",
    "Frequency_Hz": 494.38228117783,
    "prime": [
      2,
      13,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J0955-5304",
    "Frequency_Hz": 1.1599278713806,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0955-6150",
    "Frequency_Hz": 500.15992794812,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J0957-06",
    "Frequency_Hz": 0.5801473574287869,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0957-0619",
    "Frequency_Hz": 0.58014346794,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J0957-5432",
    "Frequency_Hz": 4.91263619475,
    "prime": 5
  },
  {
    "PSRJ": "J0959-4809",
    "Frequency_Hz": 1.492346010566,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1000+08",
    "Frequency_Hz": 2.270807408282089,
    "prime": 2
  },
  {
    "PSRJ": "J1000-5149",
    "Frequency_Hz": 3.9111833095733393,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1001-5507",
    "Frequency_Hz": 0.6960691594487,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1001-5559",
    "Frequency_Hz": 0.6019826734548,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1001-5603",
    "Frequency_Hz": 2.6348169987853494,
    "prime": 3
  },
  {
    "PSRJ": "J1001-5939",
    "Frequency_Hz": 0.129305212778,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1002-5559",
    "Frequency_Hz": 1.2861721336,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1002-5919",
    "Frequency_Hz": 1.4015628057388814,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1003+41",
    "Frequency_Hz": 1.1363636363636365,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1003-4747",
    "Frequency_Hz": 3.25653828421,
    "prime": 3
  },
  {
    "PSRJ": "J1006-6311",
    "Frequency_Hz": 1.1964621074922903,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1012+5307",
    "Frequency_Hz": 190.2678344415654,
    "prime": [
      2,
      5,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1012-2337",
    "Frequency_Hz": 0.397149259359,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1012-4235",
    "Frequency_Hz": 322.461932664884,
    "prime": [
      2,
      7,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1012-5830",
    "Frequency_Hz": 0.46869334352842096,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1012-5857",
    "Frequency_Hz": 1.2196177773098,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1013-5934",
    "Frequency_Hz": 2.2578407999043,
    "prime": 2
  },
  {
    "PSRJ": "J1014-48",
    "Frequency_Hz": 0.662778366914104,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1015-5359",
    "Frequency_Hz": 48.075767409437276,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1015-5719",
    "Frequency_Hz": 7.146916389768,
    "prime": 7
  },
  {
    "PSRJ": "J1016-5345",
    "Frequency_Hz": 1.2993996356827,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1016-5819",
    "Frequency_Hz": 11.38507898552,
    "prime": 11
  },
  {
    "PSRJ": "J1016-5857",
    "Frequency_Hz": 9.30816269736,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1017+3011",
    "Frequency_Hz": 2.208553372518091,
    "prime": 2
  },
  {
    "PSRJ": "J1017-5621",
    "Frequency_Hz": 1.98624281961,
    "prime": 2
  },
  {
    "PSRJ": "J1017-7156",
    "Frequency_Hz": 427.6219050534547,
    "prime": [
      2,
      107
    ],
    "derived": true
  },
  {
    "PSRJ": "J1018-1523",
    "Frequency_Hz": 12.02609153542,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1018-1642",
    "Frequency_Hz": 0.554109810506,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1019-5749",
    "Frequency_Hz": 6.153370289293,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1020-5510",
    "Frequency_Hz": 253.62827935024492,
    "prime": [
      2,
      127
    ],
    "derived": true
  },
  {
    "PSRJ": "J1020-5921",
    "Frequency_Hz": 0.8075552646684389,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1020-6026",
    "Frequency_Hz": 7.11838566803,
    "prime": 7
  },
  {
    "PSRJ": "J1020-6158",
    "Frequency_Hz": 3.5350853687765706,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1021-5601",
    "Frequency_Hz": 1.4924787334,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1022+1001",
    "Frequency_Hz": 60.7794479566973,
    "prime": 61
  },
  {
    "PSRJ": "J1022-5813",
    "Frequency_Hz": 0.6083739009927763,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1023+0038",
    "Frequency_Hz": 592.42145906986,
    "prime": [
      2,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1023-5746",
    "Frequency_Hz": 8.970827684,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1024-0719",
    "Frequency_Hz": 193.715683448548,
    "prime": [
      2,
      97
    ],
    "derived": true
  },
  {
    "PSRJ": "J1028-5819",
    "Frequency_Hz": 10.940532300155269,
    "prime": 11
  },
  {
    "PSRJ": "J1030-6008",
    "Frequency_Hz": 36.59724523019868,
    "prime": 37
  },
  {
    "PSRJ": "J1031-6117",
    "Frequency_Hz": 3.2635921411997333,
    "prime": 3
  },
  {
    "PSRJ": "J1032-5206",
    "Frequency_Hz": 0.415347538228,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1032-5804",
    "Frequency_Hz": 12.6998621581,
    "prime": 13
  },
  {
    "PSRJ": "J1032-5911",
    "Frequency_Hz": 2.15418526489,
    "prime": 2
  },
  {
    "PSRJ": "J1034-3224",
    "Frequency_Hz": 0.869118853459,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1034-5817",
    "Frequency_Hz": 1.2634558043159652,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1034-5934",
    "Frequency_Hz": 29.009530501055515,
    "prime": 29
  },
  {
    "PSRJ": "J1035-6345",
    "Frequency_Hz": 1.7253970653703459,
    "prime": 2
  },
  {
    "PSRJ": "J1035-6720",
    "Frequency_Hz": 348.18864014054,
    "prime": [
      2,
      3,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1036-4353",
    "Frequency_Hz": 595.1998208151,
    "prime": [
      5,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1036-4926",
    "Frequency_Hz": 1.9593641212052,
    "prime": 2
  },
  {
    "PSRJ": "J1036-6559",
    "Frequency_Hz": 1.8744076182261553,
    "prime": 2
  },
  {
    "PSRJ": "J1036-8317",
    "Frequency_Hz": 293.42723004694835,
    "prime": 293
  },
  {
    "PSRJ": "J1038+0032",
    "Frequency_Hz": 34.66017334965425,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1038-5831",
    "Frequency_Hz": 1.5105891872725,
    "prime": 2
  },
  {
    "PSRJ": "J1039-6108",
    "Frequency_Hz": 3.6825278049261914,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1039-6208",
    "Frequency_Hz": 0.8022057449162215,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1041-1942",
    "Frequency_Hz": 0.721308702201,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1042-5521",
    "Frequency_Hz": 0.8540670284481,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1043-6116",
    "Frequency_Hz": 3.46489635543,
    "prime": 3
  },
  {
    "PSRJ": "J1044-5737",
    "Frequency_Hz": 7.192749594,
    "prime": 7
  },
  {
    "PSRJ": "J1045-0436",
    "Frequency_Hz": 41.58433482255,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1045-4509",
    "Frequency_Hz": 133.7931495240541,
    "prime": [
      2,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1046+0304",
    "Frequency_Hz": 3.0649368163275317,
    "prime": 3
  },
  {
    "PSRJ": "J1046-5813",
    "Frequency_Hz": 2.706885409446,
    "prime": 3
  },
  {
    "PSRJ": "J1047-3032",
    "Frequency_Hz": 3.027293151199,
    "prime": 3
  },
  {
    "PSRJ": "J1047-6709",
    "Frequency_Hz": 5.038977768452,
    "prime": 5
  },
  {
    "PSRJ": "J1048+2339",
    "Frequency_Hz": 214.35478534113,
    "prime": [
      2,
      107
    ],
    "derived": true
  },
  {
    "PSRJ": "J1048+5349",
    "Frequency_Hz": 0.36618479871,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1048-5832",
    "Frequency_Hz": 8.08144403804,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1048-5838",
    "Frequency_Hz": 0.8121466098238764,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1049+5822",
    "Frequency_Hz": 1.37434776862,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1049-5833",
    "Frequency_Hz": 0.454064913754,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1050-5953",
    "Frequency_Hz": 0.154988861,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1051-6214",
    "Frequency_Hz": 0.872562279132673,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1052-5954",
    "Frequency_Hz": 5.5373591567853975,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1052-6348",
    "Frequency_Hz": 2.60531718877,
    "prime": 3
  },
  {
    "PSRJ": "J1054-5943",
    "Frequency_Hz": 2.882600685911409,
    "prime": 3
  },
  {
    "PSRJ": "J1054-5946",
    "Frequency_Hz": 4.379736274525528,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1054-6452",
    "Frequency_Hz": 0.54347721486,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1055-6022",
    "Frequency_Hz": 1.0553439136,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1055-6028",
    "Frequency_Hz": 10.034032077412643,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1055-6236",
    "Frequency_Hz": 2.228981273785919,
    "prime": 2
  },
  {
    "PSRJ": "J1055-6905",
    "Frequency_Hz": 0.34253649110466367,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1056-5709",
    "Frequency_Hz": 1.47911075457,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1056-6258",
    "Frequency_Hz": 2.367137944363,
    "prime": 2
  },
  {
    "PSRJ": "J1056-7117",
    "Frequency_Hz": 38.008828488,
    "prime": [
      2,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1057-4754",
    "Frequency_Hz": 1.591581479875073,
    "prime": 2
  },
  {
    "PSRJ": "J1057-5226",
    "Frequency_Hz": 5.073165274053,
    "prime": 5
  },
  {
    "PSRJ": "J1057-5851",
    "Frequency_Hz": 1.6119541713,
    "prime": 2
  },
  {
    "PSRJ": "J1057-7914",
    "Frequency_Hz": 0.742167900236,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1058-5957",
    "Frequency_Hz": 1.6226634697651,
    "prime": 2
  },
  {
    "PSRJ": "J1059+6459",
    "Frequency_Hz": 0.2753933549,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1059-5742",
    "Frequency_Hz": 0.8438795009324,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1101-6101",
    "Frequency_Hz": 15.9235474,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1101-6424",
    "Frequency_Hz": 195.72256536982064,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1102+02",
    "Frequency_Hz": 246.9135802469136,
    "prime": [
      13,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1103-5403",
    "Frequency_Hz": 294.749654528,
    "prime": [
      5,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1103-6025",
    "Frequency_Hz": 2.521516421572495,
    "prime": 3
  },
  {
    "PSRJ": "J1104-6103",
    "Frequency_Hz": 3.5599185722727955,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1105+02",
    "Frequency_Hz": 0.15617544155,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1105+37",
    "Frequency_Hz": 1.1428571428571428,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1105-4353",
    "Frequency_Hz": 2.8480951750270456,
    "prime": 3
  },
  {
    "PSRJ": "J1105-6037",
    "Frequency_Hz": 5.1298291239,
    "prime": 5
  },
  {
    "PSRJ": "J1105-6107",
    "Frequency_Hz": 15.8216526767,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1106-6438",
    "Frequency_Hz": 0.36792650225,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1107-5907",
    "Frequency_Hz": 3.95611366927,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1107-5947",
    "Frequency_Hz": 0.6593996580453866,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1107-6143",
    "Frequency_Hz": 0.5557421405762054,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1108-6329",
    "Frequency_Hz": 233.77686180886295,
    "prime": [
      2,
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1110+58",
    "Frequency_Hz": 1.2604777210562803,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1110-5637",
    "Frequency_Hz": 1.7912970457,
    "prime": 2
  },
  {
    "PSRJ": "J1111-6039",
    "Frequency_Hz": 9.37302,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1112-6103",
    "Frequency_Hz": 15.3936498245,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1112-6613",
    "Frequency_Hz": 2.9920951224926,
    "prime": 3
  },
  {
    "PSRJ": "J1112-6926",
    "Frequency_Hz": 1.21878672858,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1114-6100",
    "Frequency_Hz": 1.1352471998508,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1115+5030",
    "Frequency_Hz": 0.6037044172606,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1115-0956",
    "Frequency_Hz": 0.762838173423,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1115-6052",
    "Frequency_Hz": 3.8493830394852,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1116-2444",
    "Frequency_Hz": 1.1521415868366662,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1116-4122",
    "Frequency_Hz": 1.0602593349337,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1117-6154",
    "Frequency_Hz": 1.97978323338,
    "prime": 2
  },
  {
    "PSRJ": "J1117-6447",
    "Frequency_Hz": 0.865597049246968,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1119-6127",
    "Frequency_Hz": 2.4356476654,
    "prime": 2
  },
  {
    "PSRJ": "J1119-7936",
    "Frequency_Hz": 0.4384806660675,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1120-24",
    "Frequency_Hz": 2.0120724346076457,
    "prime": 2
  },
  {
    "PSRJ": "J1120-3618",
    "Frequency_Hz": 179.95266943563,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1121-5444",
    "Frequency_Hz": 1.8664135094437,
    "prime": 2
  },
  {
    "PSRJ": "J1122-3546",
    "Frequency_Hz": 127.582438285,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1123-4844",
    "Frequency_Hz": 4.08432434691,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1123-6102",
    "Frequency_Hz": 1.5619183006277,
    "prime": 2
  },
  {
    "PSRJ": "J1123-6259",
    "Frequency_Hz": 3.684080806697,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1123-6651",
    "Frequency_Hz": 4.292234700197,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1124-3653",
    "Frequency_Hz": 415.01134664715,
    "prime": [
      5,
      83
    ],
    "derived": true
  },
  {
    "PSRJ": "J1124-5638",
    "Frequency_Hz": 5.38909324929458,
    "prime": 5
  },
  {
    "PSRJ": "J1124-5916",
    "Frequency_Hz": 7.381334652,
    "prime": 7
  },
  {
    "PSRJ": "J1124-6421",
    "Frequency_Hz": 2.0872530880087687,
    "prime": 2
  },
  {
    "PSRJ": "J1125+7819",
    "Frequency_Hz": 238.004053174088,
    "prime": [
      2,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1125-5825",
    "Frequency_Hz": 322.350432991279,
    "prime": [
      2,
      7,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1125-6014",
    "Frequency_Hz": 380.173093964712,
    "prime": [
      2,
      5,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1126-2737",
    "Frequency_Hz": 2.7920404510820553,
    "prime": 3
  },
  {
    "PSRJ": "J1126-38",
    "Frequency_Hz": 1.1266970874880289,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1126-6054",
    "Frequency_Hz": 4.9324940293718,
    "prime": 5
  },
  {
    "PSRJ": "J1126-6942",
    "Frequency_Hz": 1.72586751278,
    "prime": 2
  },
  {
    "PSRJ": "J1128-6219",
    "Frequency_Hz": 1.9380464291019237,
    "prime": 2
  },
  {
    "PSRJ": "J1129-53",
    "Frequency_Hz": 0.9408399819358723,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1130+0921",
    "Frequency_Hz": 0.2084794003,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1130-5826",
    "Frequency_Hz": 6.160538375078345,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1130-5925",
    "Frequency_Hz": 1.46846364391,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1130-6807",
    "Frequency_Hz": 3.900868462421,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1132+25",
    "Frequency_Hz": 0.998003992015968,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1132-4700",
    "Frequency_Hz": 3.070937017275,
    "prime": 3
  },
  {
    "PSRJ": "J1132-5627",
    "Frequency_Hz": 5.708862390206221,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1133-6250",
    "Frequency_Hz": 0.9776359779173,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1134-6207",
    "Frequency_Hz": 1.451460968037378,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1135-6055",
    "Frequency_Hz": 8.7,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1136+1551",
    "Frequency_Hz": 0.8418094604365,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1136-5525",
    "Frequency_Hz": 2.741870487605,
    "prime": 3
  },
  {
    "PSRJ": "J1136-64",
    "Frequency_Hz": 0.9769259851565866,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1136-6527",
    "Frequency_Hz": 0.8408243743534434,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1137+7528",
    "Frequency_Hz": 397.9873963185304,
    "prime": [
      2,
      199
    ],
    "derived": true
  },
  {
    "PSRJ": "J1137-6700",
    "Frequency_Hz": 1.797862293773,
    "prime": 2
  },
  {
    "PSRJ": "J1138-6154",
    "Frequency_Hz": 1.6016092970216473,
    "prime": 2
  },
  {
    "PSRJ": "J1138-6207",
    "Frequency_Hz": 8.50602014261,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1139-6247",
    "Frequency_Hz": 8.3,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1141-3107",
    "Frequency_Hz": 1.8572396845631,
    "prime": 2
  },
  {
    "PSRJ": "J1141-3322",
    "Frequency_Hz": 3.4309098069016,
    "prime": 3
  },
  {
    "PSRJ": "J1141-6545",
    "Frequency_Hz": 2.538723048486,
    "prime": 3
  },
  {
    "PSRJ": "J1142+0119",
    "Frequency_Hz": 197.03275347148812,
    "prime": 197
  },
  {
    "PSRJ": "J1142-6230",
    "Frequency_Hz": 1.7908842305,
    "prime": 2
  },
  {
    "PSRJ": "J1143-5158",
    "Frequency_Hz": 1.4800649013569613,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1143-5536",
    "Frequency_Hz": 1.4590904190538665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1144-6146",
    "Frequency_Hz": 1.01236803003,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1144-6217",
    "Frequency_Hz": 1.17555097079,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1146-6030",
    "Frequency_Hz": 3.65798176371,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1146-6610",
    "Frequency_Hz": 268.6502004551282,
    "prime": 269
  },
  {
    "PSRJ": "J1148-5725",
    "Frequency_Hz": 0.28090382915,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1148-6415",
    "Frequency_Hz": 0.3085440313294109,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1148-6546",
    "Frequency_Hz": 0.6681173721874765,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1151-6108",
    "Frequency_Hz": 9.83930672914,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1152-5800",
    "Frequency_Hz": 0.55871244649,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1152-6012",
    "Frequency_Hz": 2.6555518313907833,
    "prime": 3
  },
  {
    "PSRJ": "J1152-6056",
    "Frequency_Hz": 0.4083299305839118,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1153-2117",
    "Frequency_Hz": 0.42671582432962946,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1154-19",
    "Frequency_Hz": 90.09009009009009,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1154-6250",
    "Frequency_Hz": 3.5459520375772025,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1155-6529",
    "Frequency_Hz": 12.679117898552857,
    "prime": 13
  },
  {
    "PSRJ": "J1156-5707",
    "Frequency_Hz": 3.4672047206,
    "prime": 3
  },
  {
    "PSRJ": "J1156-5909",
    "Frequency_Hz": 0.9634551342624257,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1157-5112",
    "Frequency_Hz": 22.941448320667842,
    "prime": 23
  },
  {
    "PSRJ": "J1157-6224",
    "Frequency_Hz": 2.4967147338,
    "prime": 2
  },
  {
    "PSRJ": "J1159-6409",
    "Frequency_Hz": 1.498159748737,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1159-7910",
    "Frequency_Hz": 1.9044838568495,
    "prime": 2
  },
  {
    "PSRJ": "J1201-6306",
    "Frequency_Hz": 1.688801138403446,
    "prime": 2
  },
  {
    "PSRJ": "J1202-5820",
    "Frequency_Hz": 2.2084638434182,
    "prime": 2
  },
  {
    "PSRJ": "J1203-6242",
    "Frequency_Hz": 9.94,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1204-6843",
    "Frequency_Hz": 3.2377022412221,
    "prime": 3
  },
  {
    "PSRJ": "J1207-4508",
    "Frequency_Hz": 0.565026707,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1207-5050",
    "Frequency_Hz": 206.493931730035,
    "prime": [
      2,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1208-5936",
    "Frequency_Hz": 34.8263871091,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1208-6238",
    "Frequency_Hz": 2.26968010518,
    "prime": 2
  },
  {
    "PSRJ": "J1210-5226",
    "Frequency_Hz": 2.35776350287,
    "prime": 2
  },
  {
    "PSRJ": "J1210-5559",
    "Frequency_Hz": 3.57439039054,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1210-6322",
    "Frequency_Hz": 0.859707944852488,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1210-6550",
    "Frequency_Hz": 0.23601548,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1211-6324",
    "Frequency_Hz": 2.309020280644,
    "prime": 2
  },
  {
    "PSRJ": "J1212-5838",
    "Frequency_Hz": 13.54974993936487,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1214-5830",
    "Frequency_Hz": 1.0991152437755665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1215-5328",
    "Frequency_Hz": 1.571303667847,
    "prime": 2
  },
  {
    "PSRJ": "J1216-50",
    "Frequency_Hz": 0.15735641227380015,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1216-6223",
    "Frequency_Hz": 2.673417841032,
    "prime": 3
  },
  {
    "PSRJ": "J1216-6410",
    "Frequency_Hz": 282.53570587239,
    "prime": 283
  },
  {
    "PSRJ": "J1220-6318",
    "Frequency_Hz": 1.267086536181,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1221-0633",
    "Frequency_Hz": 516.91883206756,
    "prime": [
      11,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1222-5738",
    "Frequency_Hz": 0.9249294629321804,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1223-5856",
    "Frequency_Hz": 3.4657068515844554,
    "prime": 3
  },
  {
    "PSRJ": "J1224-6208",
    "Frequency_Hz": 1.70718030852,
    "prime": 2
  },
  {
    "PSRJ": "J1224-6407",
    "Frequency_Hz": 4.61933025111,
    "prime": 5
  },
  {
    "PSRJ": "J1225-5556",
    "Frequency_Hz": 0.9818814706517156,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1225-6035",
    "Frequency_Hz": 1.596617872920345,
    "prime": 2
  },
  {
    "PSRJ": "J1225-6408",
    "Frequency_Hz": 2.383113777136,
    "prime": 2
  },
  {
    "PSRJ": "J1226+0005",
    "Frequency_Hz": 0.4376221733939916,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1226-3223",
    "Frequency_Hz": 0.16147252387412328,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1227-4853",
    "Frequency_Hz": 592.987773605,
    "prime": 593
  },
  {
    "PSRJ": "J1227-6208",
    "Frequency_Hz": 28.96214051691,
    "prime": 29
  },
  {
    "PSRJ": "J1227-63",
    "Frequency_Hz": 2.249324280492897,
    "prime": 2
  },
  {
    "PSRJ": "J1231-1411",
    "Frequency_Hz": 271.453015271425,
    "prime": 271
  },
  {
    "PSRJ": "J1231-4609",
    "Frequency_Hz": 1.1399400551075,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1231-5113",
    "Frequency_Hz": 4.84,
    "prime": 5
  },
  {
    "PSRJ": "J1231-5929",
    "Frequency_Hz": 2.4400140837612914,
    "prime": 2
  },
  {
    "PSRJ": "J1231-6303",
    "Frequency_Hz": 0.74006295676,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1231-6511",
    "Frequency_Hz": 4.04,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1232-4742",
    "Frequency_Hz": 0.5339044325385073,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1232-5843",
    "Frequency_Hz": 3.5048563289293644,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1232-6501",
    "Frequency_Hz": 11.32734917043,
    "prime": 11
  },
  {
    "PSRJ": "J1233-6312",
    "Frequency_Hz": 1.7706655597466603,
    "prime": 2
  },
  {
    "PSRJ": "J1233-6344",
    "Frequency_Hz": 1.3211925713147332,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1234-3630",
    "Frequency_Hz": 1.756721402494727,
    "prime": 2
  },
  {
    "PSRJ": "J1235-54",
    "Frequency_Hz": 1.5668239199048386,
    "prime": 2
  },
  {
    "PSRJ": "J1235-6354",
    "Frequency_Hz": 3.8944198871498585,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1236-0159",
    "Frequency_Hz": 0.27796512652785893,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1236-5033",
    "Frequency_Hz": 3.3925919441569,
    "prime": 3
  },
  {
    "PSRJ": "J1236-65",
    "Frequency_Hz": 9.943797655650265,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1237-6725",
    "Frequency_Hz": 0.47371495060102997,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1238+2152",
    "Frequency_Hz": 0.89398205209,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1239+0326",
    "Frequency_Hz": 1.165057734198,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1239+2453",
    "Frequency_Hz": 0.723353935998,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1239+32",
    "Frequency_Hz": 212.7659574468085,
    "prime": [
      3,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1239+3239",
    "Frequency_Hz": 212.71645129924,
    "prime": [
      3,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1239-48",
    "Frequency_Hz": 1.5292858235204159,
    "prime": 2
  },
  {
    "PSRJ": "J1239-6832",
    "Frequency_Hz": 0.7680937554649,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1240-4124",
    "Frequency_Hz": 1.952192814966,
    "prime": 2
  },
  {
    "PSRJ": "J1242+39",
    "Frequency_Hz": 0.7633587786259541,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1242-4712",
    "Frequency_Hz": 188.2052895367,
    "prime": [
      2,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1243+17",
    "Frequency_Hz": 0.8220304151253597,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1243-5735",
    "Frequency_Hz": 2.1221290456949515,
    "prime": 2
  },
  {
    "PSRJ": "J1243-6423",
    "Frequency_Hz": 2.5740964816,
    "prime": 3
  },
  {
    "PSRJ": "J1244-1812",
    "Frequency_Hz": 0.29194321051,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1244-4708",
    "Frequency_Hz": 0.7084996307,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1244-5053",
    "Frequency_Hz": 3.6336270352634106,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1244-6359",
    "Frequency_Hz": 6.790050462574062,
    "prime": 7
  },
  {
    "PSRJ": "J1244-6437",
    "Frequency_Hz": 4.696937174238051,
    "prime": 5
  },
  {
    "PSRJ": "J1244-6531",
    "Frequency_Hz": 0.646488075714925,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1245-6238",
    "Frequency_Hz": 0.43800223922,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1246+2253",
    "Frequency_Hz": 2.110280928271,
    "prime": 2
  },
  {
    "PSRJ": "J1248-6344",
    "Frequency_Hz": 5.041970970791662,
    "prime": 5
  },
  {
    "PSRJ": "J1248-6444",
    "Frequency_Hz": 0.809786434982284,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1249-6507",
    "Frequency_Hz": 2.301788010318761,
    "prime": 2
  },
  {
    "PSRJ": "J1251-7407",
    "Frequency_Hz": 3.0575641029375684,
    "prime": 3
  },
  {
    "PSRJ": "J1252+53",
    "Frequency_Hz": 4.5433154100645945,
    "prime": 5
  },
  {
    "PSRJ": "J1252-6314",
    "Frequency_Hz": 1.214565999427,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1253-5820",
    "Frequency_Hz": 3.913921625337,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1254-6150",
    "Frequency_Hz": 5.41998948178424,
    "prime": 5
  },
  {
    "PSRJ": "J1255-46",
    "Frequency_Hz": 19.23076923076923,
    "prime": 19
  },
  {
    "PSRJ": "J1255-6131",
    "Frequency_Hz": 1.5198177463179823,
    "prime": 2
  },
  {
    "PSRJ": "J1255-62",
    "Frequency_Hz": 5.467124567827957,
    "prime": 5
  },
  {
    "PSRJ": "J1257-1027",
    "Frequency_Hz": 1.619936933486,
    "prime": 2
  },
  {
    "PSRJ": "J1259-6741",
    "Frequency_Hz": 1.5075446998675,
    "prime": 2
  },
  {
    "PSRJ": "J1300+1240",
    "Frequency_Hz": 160.8096586618355,
    "prime": [
      7,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1300-6602",
    "Frequency_Hz": 0.8746489492828952,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1301+0833",
    "Frequency_Hz": 542.3800514004,
    "prime": [
      2,
      271
    ],
    "derived": true
  },
  {
    "PSRJ": "J1301-6305",
    "Frequency_Hz": 5.4192289772,
    "prime": 5
  },
  {
    "PSRJ": "J1301-6310",
    "Frequency_Hz": 1.5064105730509993,
    "prime": 2
  },
  {
    "PSRJ": "J1302-3258",
    "Frequency_Hz": 265.19198063569,
    "prime": [
      5,
      53
    ],
    "derived": true
  },
  {
    "PSRJ": "J1302-63",
    "Frequency_Hz": 3.0700807643076584,
    "prime": 3
  },
  {
    "PSRJ": "J1302-6313",
    "Frequency_Hz": 1.0332220002221801,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1302-6350",
    "Frequency_Hz": 20.9369242,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1303+38",
    "Frequency_Hz": 2.5233409033560434,
    "prime": 3
  },
  {
    "PSRJ": "J1303-62",
    "Frequency_Hz": 2.3842677051964567,
    "prime": 2
  },
  {
    "PSRJ": "J1303-6305",
    "Frequency_Hz": 0.43353073142,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1304+12",
    "Frequency_Hz": 239.23444976076556,
    "prime": 239
  },
  {
    "PSRJ": "J1305-6203",
    "Frequency_Hz": 2.33768482203,
    "prime": 2
  },
  {
    "PSRJ": "J1305-6256",
    "Frequency_Hz": 2.0910399795,
    "prime": 2
  },
  {
    "PSRJ": "J1305-6455",
    "Frequency_Hz": 1.7493147466976,
    "prime": 2
  },
  {
    "PSRJ": "J1305-66",
    "Frequency_Hz": 5.069032620745625,
    "prime": 5
  },
  {
    "PSRJ": "J1306-4035",
    "Frequency_Hz": 453.6114273790785,
    "prime": [
      2,
      227
    ],
    "derived": true
  },
  {
    "PSRJ": "J1306-60",
    "Frequency_Hz": 0.5607955670232019,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1306-6043",
    "Frequency_Hz": 176.33073721588931,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1306-6242",
    "Frequency_Hz": 1.0184314517500133,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1306-6617",
    "Frequency_Hz": 2.1140364629,
    "prime": 2
  },
  {
    "PSRJ": "J1307-6318",
    "Frequency_Hz": 0.2015142891,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1307-67",
    "Frequency_Hz": 0.2738825591586328,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1308+2127",
    "Frequency_Hz": 0.09696948953726651,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1308-23",
    "Frequency_Hz": 353.35689045936397,
    "prime": 353
  },
  {
    "PSRJ": "J1308-4650",
    "Frequency_Hz": 0.9444359575288579,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1308-5844",
    "Frequency_Hz": 2.151927137,
    "prime": 2
  },
  {
    "PSRJ": "J1309-6415",
    "Frequency_Hz": 1.6143260283,
    "prime": 2
  },
  {
    "PSRJ": "J1309-6526",
    "Frequency_Hz": 2.5107197515389,
    "prime": 3
  },
  {
    "PSRJ": "J1310-63",
    "Frequency_Hz": 5.385996022549657,
    "prime": 5
  },
  {
    "PSRJ": "J1311-1228",
    "Frequency_Hz": 2.2345477639254,
    "prime": 2
  },
  {
    "PSRJ": "J1311-3430",
    "Frequency_Hz": 390.56839326407,
    "prime": [
      17,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312+0051",
    "Frequency_Hz": 236.51738603172325,
    "prime": [
      3,
      79
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312+1810A",
    "Frequency_Hz": 30.15393644864908,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312+1810B",
    "Frequency_Hz": 160.19831544487,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312+1810C",
    "Frequency_Hz": 79.77612072867,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312+1810D",
    "Frequency_Hz": 164.7517730112,
    "prime": [
      3,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312+1810E",
    "Frequency_Hz": 251.75352627488,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312-5402",
    "Frequency_Hz": 1.37333511678,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312-5516",
    "Frequency_Hz": 1.1775198318,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1312-6400",
    "Frequency_Hz": 0.4102676860891,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1313+0931",
    "Frequency_Hz": 1.1779492610135311,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1314-6101",
    "Frequency_Hz": 0.3391682017570408,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1316-6147",
    "Frequency_Hz": 0.517437648763324,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1316-6232",
    "Frequency_Hz": 2.9169367396652097,
    "prime": 3
  },
  {
    "PSRJ": "J1317-0157",
    "Frequency_Hz": 343.850032475,
    "prime": [
      2,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1317-5759",
    "Frequency_Hz": 0.37847269802180283,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1317-6302",
    "Frequency_Hz": 3.827450039,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1319-6056",
    "Frequency_Hz": 3.5167566480955,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1319-6105",
    "Frequency_Hz": 2.37463069424916,
    "prime": 2
  },
  {
    "PSRJ": "J1320+67",
    "Frequency_Hz": 0.9721763138962881,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1320-3512",
    "Frequency_Hz": 2.181080193687,
    "prime": 2
  },
  {
    "PSRJ": "J1320-5359",
    "Frequency_Hz": 3.57475915865,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1321+8323",
    "Frequency_Hz": 1.492453962361,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1321-5922",
    "Frequency_Hz": 0.78182562202774,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1322-62",
    "Frequency_Hz": 0.9570742622632318,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1322-6241",
    "Frequency_Hz": 1.97605646475,
    "prime": 2
  },
  {
    "PSRJ": "J1322-6329",
    "Frequency_Hz": 0.3617670906101559,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1324-6146",
    "Frequency_Hz": 1.184681721358648,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1324-6302",
    "Frequency_Hz": 0.4026083070969973,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1325-6253",
    "Frequency_Hz": 34.51766431115824,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326+33",
    "Frequency_Hz": 24.096385542168672,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-4728A",
    "Frequency_Hz": 243.38088019784,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-4728B",
    "Frequency_Hz": 208.68683313306,
    "prime": [
      11,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-4728C",
    "Frequency_Hz": 145.6057701815,
    "prime": [
      2,
      73
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-4728D",
    "Frequency_Hz": 218.39623714185,
    "prime": [
      2,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-4728E",
    "Frequency_Hz": 237.65856646672,
    "prime": [
      2,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-5859",
    "Frequency_Hz": 2.09207592101,
    "prime": 2
  },
  {
    "PSRJ": "J1326-6408",
    "Frequency_Hz": 1.2615520801009,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1326-6700",
    "Frequency_Hz": 1.841566778822,
    "prime": 2
  },
  {
    "PSRJ": "J1327+3423",
    "Frequency_Hz": 24.0890080713045,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1327-0755",
    "Frequency_Hz": 373.423698453458,
    "prime": 373
  },
  {
    "PSRJ": "J1327-6222",
    "Frequency_Hz": 1.887034156,
    "prime": 2
  },
  {
    "PSRJ": "J1327-6301",
    "Frequency_Hz": 5.08957173317,
    "prime": 5
  },
  {
    "PSRJ": "J1327-6400",
    "Frequency_Hz": 3.56280182998,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1328-4357",
    "Frequency_Hz": 1.877218830111,
    "prime": 2
  },
  {
    "PSRJ": "J1328-4921",
    "Frequency_Hz": 0.6762599295736592,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1328-62",
    "Frequency_Hz": 1.890868022630816,
    "prime": 2
  },
  {
    "PSRJ": "J1328-6605",
    "Frequency_Hz": 1.3617169616826463,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1329-6158",
    "Frequency_Hz": 0.6388886552082645,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1331-5245",
    "Frequency_Hz": 1.5429321318538924,
    "prime": 2
  },
  {
    "PSRJ": "J1332-03",
    "Frequency_Hz": 0.9038322487346349,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1332-3032",
    "Frequency_Hz": 1.53743384519,
    "prime": 2
  },
  {
    "PSRJ": "J1333-4449",
    "Frequency_Hz": 2.893493831775025,
    "prime": 3
  },
  {
    "PSRJ": "J1333-61",
    "Frequency_Hz": 0.6526839997780874,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1334+10",
    "Frequency_Hz": 1.097574360662935,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1334-5839",
    "Frequency_Hz": 9.283479079243,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1335-3642",
    "Frequency_Hz": 2.5050602216477285,
    "prime": 3
  },
  {
    "PSRJ": "J1335-5656",
    "Frequency_Hz": 308.86,
    "prime": [
      3,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1336+33",
    "Frequency_Hz": 0.3318951211417192,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1336-2522",
    "Frequency_Hz": 2.0914136721402063,
    "prime": 2
  },
  {
    "PSRJ": "J1337-4441",
    "Frequency_Hz": 0.79522136051,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1337-6306",
    "Frequency_Hz": 4.80877862491,
    "prime": 5
  },
  {
    "PSRJ": "J1337-6423",
    "Frequency_Hz": 106.11873496995,
    "prime": [
      2,
      53
    ],
    "derived": true
  },
  {
    "PSRJ": "J1338-6204",
    "Frequency_Hz": 0.8071007157385,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1338-6425",
    "Frequency_Hz": 244.6305011620316,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1339-4712",
    "Frequency_Hz": 7.296358968158,
    "prime": 7
  },
  {
    "PSRJ": "J1339-6618",
    "Frequency_Hz": 1.79153927780696,
    "prime": 2
  },
  {
    "PSRJ": "J1340-6456",
    "Frequency_Hz": 2.641107894046,
    "prime": 3
  },
  {
    "PSRJ": "J1341-6023",
    "Frequency_Hz": 1.594136028705,
    "prime": 2
  },
  {
    "PSRJ": "J1341-6220",
    "Frequency_Hz": 5.172242227,
    "prime": 5
  },
  {
    "PSRJ": "J1342+2822A",
    "Frequency_Hz": 392.967704,
    "prime": [
      3,
      131
    ],
    "derived": true
  },
  {
    "PSRJ": "J1342+2822B",
    "Frequency_Hz": 418.5114725991518,
    "prime": 419
  },
  {
    "PSRJ": "J1342+2822C",
    "Frequency_Hz": 461.68051708217916,
    "prime": [
      2,
      3,
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1342+2822D",
    "Frequency_Hz": 183.72305,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1342+2822E",
    "Frequency_Hz": 182.81535648994515,
    "prime": [
      3,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1342+2822F",
    "Frequency_Hz": 227.27272727272725,
    "prime": 227
  },
  {
    "PSRJ": "J1343+6634",
    "Frequency_Hz": 0.7173067101404178,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1344-5855",
    "Frequency_Hz": 3.9619976364615304,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1344-6059",
    "Frequency_Hz": 1.8515010218950707,
    "prime": 2
  },
  {
    "PSRJ": "J1345-6115",
    "Frequency_Hz": 0.7980292310107,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1346-4918",
    "Frequency_Hz": 3.337503827395,
    "prime": 3
  },
  {
    "PSRJ": "J1347-5947",
    "Frequency_Hz": 1.639420393185,
    "prime": 2
  },
  {
    "PSRJ": "J1348-62",
    "Frequency_Hz": 1.6226996204505586,
    "prime": 2
  },
  {
    "PSRJ": "J1348-6307",
    "Frequency_Hz": 1.0778507462,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1349-6130",
    "Frequency_Hz": 3.85557384197,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1349-63",
    "Frequency_Hz": 2.6807207922066087,
    "prime": 3
  },
  {
    "PSRJ": "J1350-5115",
    "Frequency_Hz": 3.38180924275,
    "prime": 3
  },
  {
    "PSRJ": "J1350-6225",
    "Frequency_Hz": 7.2381013428,
    "prime": 7
  },
  {
    "PSRJ": "J1352-6141",
    "Frequency_Hz": 211.0445033554071,
    "prime": 211
  },
  {
    "PSRJ": "J1352-6803",
    "Frequency_Hz": 1.5900693570117,
    "prime": 2
  },
  {
    "PSRJ": "J1353-6341",
    "Frequency_Hz": 0.4816491667469415,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1354+2453",
    "Frequency_Hz": 1.174999892192,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1354+2454",
    "Frequency_Hz": 0.1594896331738437,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1354-6249",
    "Frequency_Hz": 0.33876046409308225,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1355-5153",
    "Frequency_Hz": 1.55206115637,
    "prime": 2
  },
  {
    "PSRJ": "J1355-5747",
    "Frequency_Hz": 0.49051495513,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1355-5925",
    "Frequency_Hz": 0.824140577283,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1355-6206",
    "Frequency_Hz": 3.6152892195683712,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1356-5521",
    "Frequency_Hz": 1.9709085082041,
    "prime": 2
  },
  {
    "PSRJ": "J1357-2530",
    "Frequency_Hz": 1.0953250431831898,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1357-62",
    "Frequency_Hz": 2.194132450999537,
    "prime": 2
  },
  {
    "PSRJ": "J1357-6429",
    "Frequency_Hz": 6.01293899255,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1358-59",
    "Frequency_Hz": 2.6729403070417224,
    "prime": 3
  },
  {
    "PSRJ": "J1358-6025",
    "Frequency_Hz": 16.52,
    "prime": 17
  },
  {
    "PSRJ": "J1359-6038",
    "Frequency_Hz": 7.842555797385,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1359-6242",
    "Frequency_Hz": 1.111423544618654,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1400-1431",
    "Frequency_Hz": 324.22969197632005,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1400-6325",
    "Frequency_Hz": 32.070194112001516,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1401-6357",
    "Frequency_Hz": 1.18650992124,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1402+1306",
    "Frequency_Hz": 169.70988635881,
    "prime": [
      2,
      5,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1402-5021",
    "Frequency_Hz": 0.7245419707401768,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1403-0314",
    "Frequency_Hz": 2.7576013280607996,
    "prime": 3
  },
  {
    "PSRJ": "J1403-6310",
    "Frequency_Hz": 2.505196756058,
    "prime": 3
  },
  {
    "PSRJ": "J1403-7646",
    "Frequency_Hz": 0.7655802173375,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1404+1159",
    "Frequency_Hz": 0.37729594501842756,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1405-4656",
    "Frequency_Hz": 131.54081035553563,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1405-5641",
    "Frequency_Hz": 1.61923735551,
    "prime": 2
  },
  {
    "PSRJ": "J1406-4233",
    "Frequency_Hz": 0.41037503068,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1406-5806",
    "Frequency_Hz": 3.46801177677,
    "prime": 3
  },
  {
    "PSRJ": "J1406-59",
    "Frequency_Hz": 0.8010781614846042,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1406-6121",
    "Frequency_Hz": 4.6931907774,
    "prime": 5
  },
  {
    "PSRJ": "J1407-6048",
    "Frequency_Hz": 2.0310993539,
    "prime": 2
  },
  {
    "PSRJ": "J1407-6153",
    "Frequency_Hz": 1.4252832,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1408-6009",
    "Frequency_Hz": 1.761695455706572,
    "prime": 2
  },
  {
    "PSRJ": "J1409+49",
    "Frequency_Hz": 0.8888888888888888,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1409-6011",
    "Frequency_Hz": 3.326894683156531,
    "prime": 3
  },
  {
    "PSRJ": "J1409-6953",
    "Frequency_Hz": 1.891822633594665,
    "prime": 2
  },
  {
    "PSRJ": "J1410-6132",
    "Frequency_Hz": 19.979243084857305,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1410-7404",
    "Frequency_Hz": 3.5877084054849,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1411+2551",
    "Frequency_Hz": 16.012041054873265,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1412+7922",
    "Frequency_Hz": 17.182404832496925,
    "prime": 17
  },
  {
    "PSRJ": "J1412-6111",
    "Frequency_Hz": 1.889795514512,
    "prime": 2
  },
  {
    "PSRJ": "J1412-6145",
    "Frequency_Hz": 3.1720007909,
    "prime": 3
  },
  {
    "PSRJ": "J1413-5936",
    "Frequency_Hz": 46.13344097802894,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1413-6141",
    "Frequency_Hz": 3.5010987476142716,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1413-6205",
    "Frequency_Hz": 9.112389504,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1413-6222",
    "Frequency_Hz": 3.4198825526,
    "prime": 3
  },
  {
    "PSRJ": "J1413-6307",
    "Frequency_Hz": 2.5319475773331,
    "prime": 3
  },
  {
    "PSRJ": "J1414-6802",
    "Frequency_Hz": 0.2159739489263098,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1415-6621",
    "Frequency_Hz": 2.547904555532,
    "prime": 3
  },
  {
    "PSRJ": "J1416-5033",
    "Frequency_Hz": 1.2580475002655298,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1416-6037",
    "Frequency_Hz": 3.383137785416,
    "prime": 3
  },
  {
    "PSRJ": "J1417-4402",
    "Frequency_Hz": 375.34494200169956,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1418-3921",
    "Frequency_Hz": 0.911737585544,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1418-5945",
    "Frequency_Hz": 0.5978731209460928,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1418-6058",
    "Frequency_Hz": 9.043798163,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1420-5416",
    "Frequency_Hz": 1.06863614348,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1420-5625",
    "Frequency_Hz": 29.31078830923,
    "prime": 29
  },
  {
    "PSRJ": "J1420-6048",
    "Frequency_Hz": 14.667084336533852,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1421-4409",
    "Frequency_Hz": 156.59919569331083,
    "prime": 157
  },
  {
    "PSRJ": "J1422-6138",
    "Frequency_Hz": 2.932827817,
    "prime": 3
  },
  {
    "PSRJ": "J1423-62",
    "Frequency_Hz": 0.5982746954333095,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1423-6953",
    "Frequency_Hz": 2.999303770068213,
    "prime": 3
  },
  {
    "PSRJ": "J1424-5556",
    "Frequency_Hz": 1.29806938188,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1424-56",
    "Frequency_Hz": 0.7007708479327259,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1424-5822",
    "Frequency_Hz": 2.726751158543,
    "prime": 3
  },
  {
    "PSRJ": "J1424-6438",
    "Frequency_Hz": 0.9770360389024695,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1425-5723",
    "Frequency_Hz": 2.8307527982858187,
    "prime": 3
  },
  {
    "PSRJ": "J1425-5759",
    "Frequency_Hz": 1.4126935487129022,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1425-6210",
    "Frequency_Hz": 1.9931026297,
    "prime": 2
  },
  {
    "PSRJ": "J1426+52",
    "Frequency_Hz": 1.004217714400482,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1426-6136",
    "Frequency_Hz": 3.5248489514103096,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1427-4158",
    "Frequency_Hz": 1.7050718289293019,
    "prime": 2
  },
  {
    "PSRJ": "J1428-5530",
    "Frequency_Hz": 1.753485402027,
    "prime": 2
  },
  {
    "PSRJ": "J1429-5911",
    "Frequency_Hz": 8.632402182,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1429-5935",
    "Frequency_Hz": 1.30904645391,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1430-5712",
    "Frequency_Hz": 2.034510160580742,
    "prime": 2
  },
  {
    "PSRJ": "J1430-6623",
    "Frequency_Hz": 1.27316558258,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1431-4715",
    "Frequency_Hz": 497.02939385164154,
    "prime": [
      7,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1431-5740",
    "Frequency_Hz": 243.27680485061785,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1431-6328",
    "Frequency_Hz": 360.7118887193723,
    "prime": [
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1432-5032",
    "Frequency_Hz": 0.49140303191794504,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1433-6038",
    "Frequency_Hz": 0.5116582259798279,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1434+7257",
    "Frequency_Hz": 23.957175372381,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1434-5943",
    "Frequency_Hz": 0.9327303561779624,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1434-6006",
    "Frequency_Hz": 3.264049927601238,
    "prime": 3
  },
  {
    "PSRJ": "J1434-6029",
    "Frequency_Hz": 1.03804613136,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1435-5954",
    "Frequency_Hz": 2.114179987877,
    "prime": 2
  },
  {
    "PSRJ": "J1435-60",
    "Frequency_Hz": 0.30654479451103833,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1435-6100",
    "Frequency_Hz": 106.97507197376,
    "prime": 107
  },
  {
    "PSRJ": "J1436-6405",
    "Frequency_Hz": 107.14701674311426,
    "prime": 107
  },
  {
    "PSRJ": "J1437-5959",
    "Frequency_Hz": 16.208473804097558,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1437-6146",
    "Frequency_Hz": 2.1385053298,
    "prime": 2
  },
  {
    "PSRJ": "J1437-62",
    "Frequency_Hz": 1.2853563451879477,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1439+7655",
    "Frequency_Hz": 1.0549602649216216,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1439-5501",
    "Frequency_Hz": 34.9224342468756,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1440-6344",
    "Frequency_Hz": 2.17577321653,
    "prime": 2
  },
  {
    "PSRJ": "J1441-6137",
    "Frequency_Hz": 0.8504558277695619,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1443-5122",
    "Frequency_Hz": 1.36600561328,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1444+18",
    "Frequency_Hz": 0.8829242450997704,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1444-5941",
    "Frequency_Hz": 0.36228891961,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1444-6026",
    "Frequency_Hz": 0.21014692017201872,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1445-63",
    "Frequency_Hz": 268.9134543540507,
    "prime": 269
  },
  {
    "PSRJ": "J1446-4701",
    "Frequency_Hz": 455.644016228211,
    "prime": [
      2,
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1447-5757",
    "Frequency_Hz": 6.3,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1449-5846",
    "Frequency_Hz": 2.1582908780886365,
    "prime": 2
  },
  {
    "PSRJ": "J1449-6339",
    "Frequency_Hz": 33.937212085176974,
    "prime": [
      2,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1452-5549",
    "Frequency_Hz": 13.288559746029046,
    "prime": 13
  },
  {
    "PSRJ": "J1452-5851",
    "Frequency_Hz": 2.586365680859,
    "prime": 3
  },
  {
    "PSRJ": "J1452-6036",
    "Frequency_Hz": 6.451933931776,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1453+1902",
    "Frequency_Hz": 172.642909924795,
    "prime": 173
  },
  {
    "PSRJ": "J1453-6413",
    "Frequency_Hz": 5.57141101724,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1454-5416",
    "Frequency_Hz": 2.522327008093895,
    "prime": 3
  },
  {
    "PSRJ": "J1454-5846",
    "Frequency_Hz": 22.10004678013,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1455-3330",
    "Frequency_Hz": 125.200243244993,
    "prime": [
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1455-59",
    "Frequency_Hz": 5.675652359482199,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1456-48",
    "Frequency_Hz": 1.8628565041634844,
    "prime": 2
  },
  {
    "PSRJ": "J1456-6843",
    "Frequency_Hz": 3.796839809414,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1457-5122",
    "Frequency_Hz": 0.57198175779,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1457-5900",
    "Frequency_Hz": 0.667272800908586,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1457-5902",
    "Frequency_Hz": 2.5592507222777146,
    "prime": 3
  },
  {
    "PSRJ": "J1459-6053",
    "Frequency_Hz": 9.694559498,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1500-6054",
    "Frequency_Hz": 4.680302572200688,
    "prime": 5
  },
  {
    "PSRJ": "J1501-0046",
    "Frequency_Hz": 2.1550014351989755,
    "prime": 2
  },
  {
    "PSRJ": "J1501-5637",
    "Frequency_Hz": 1.2772231067248392,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1502+28",
    "Frequency_Hz": 0.2642706131078224,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1502+4653",
    "Frequency_Hz": 0.57061078387,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1502-5653",
    "Frequency_Hz": 1.86739407015,
    "prime": 2
  },
  {
    "PSRJ": "J1502-5828",
    "Frequency_Hz": 1.496770379090685,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1502-6128",
    "Frequency_Hz": 1.187501460259,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1502-6752",
    "Frequency_Hz": 37.39097199147,
    "prime": 37
  },
  {
    "PSRJ": "J1503+2111",
    "Frequency_Hz": 0.3017499687688782,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1504-5621",
    "Frequency_Hz": 2.4213942786813303,
    "prime": 2
  },
  {
    "PSRJ": "J1504-5659",
    "Frequency_Hz": 0.5979529644538177,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1505-25",
    "Frequency_Hz": 1.001001001001001,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1505-2524",
    "Frequency_Hz": 1.000750227637,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1506-5158",
    "Frequency_Hz": 1.1894304191798415,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1507-4352",
    "Frequency_Hz": 3.487251905886,
    "prime": 3
  },
  {
    "PSRJ": "J1507-5800",
    "Frequency_Hz": 1.1145114826677462,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1507-6640",
    "Frequency_Hz": 2.8117018527742,
    "prime": 3
  },
  {
    "PSRJ": "J1509+5531",
    "Frequency_Hz": 1.35193245777,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1509-5850",
    "Frequency_Hz": 11.2454488757,
    "prime": 11
  },
  {
    "PSRJ": "J1509-6015",
    "Frequency_Hz": 2.949517978961895,
    "prime": 3
  },
  {
    "PSRJ": "J1510-4422",
    "Frequency_Hz": 1.0594664787971264,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1510-5254",
    "Frequency_Hz": 209.2473606793408,
    "prime": [
      11,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1511-5414",
    "Frequency_Hz": 4.990417853796,
    "prime": 5
  },
  {
    "PSRJ": "J1511-5835",
    "Frequency_Hz": 3.3166335305138324,
    "prime": 3
  },
  {
    "PSRJ": "J1512-5431",
    "Frequency_Hz": 0.4900680581299,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1512-5759",
    "Frequency_Hz": 7.7700939204,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1512-6029",
    "Frequency_Hz": 4.355493649472485,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1513-2550",
    "Frequency_Hz": 471.90567042842576,
    "prime": [
      2,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1513-5739",
    "Frequency_Hz": 1.0272449320379,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1513-5908",
    "Frequency_Hz": 6.5738483848,
    "prime": 7
  },
  {
    "PSRJ": "J1513-5946",
    "Frequency_Hz": 0.9559158776469904,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1513-6013",
    "Frequency_Hz": 0.510533051856498,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1514-4834",
    "Frequency_Hz": 2.1985729853089,
    "prime": 2
  },
  {
    "PSRJ": "J1514-4946",
    "Frequency_Hz": 278.60300920296,
    "prime": [
      3,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1514-5316",
    "Frequency_Hz": 3.375194610450253,
    "prime": 3
  },
  {
    "PSRJ": "J1514-5925",
    "Frequency_Hz": 6.72054447215,
    "prime": 7
  },
  {
    "PSRJ": "J1515+20",
    "Frequency_Hz": 0.8718395815170008,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1515-5720",
    "Frequency_Hz": 3.48859614104,
    "prime": 3
  },
  {
    "PSRJ": "J1516-43",
    "Frequency_Hz": 27.760652,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1517-313",
    "Frequency_Hz": 7.108952517173452,
    "prime": 7
  },
  {
    "PSRJ": "J1517-314",
    "Frequency_Hz": 0.9060216372463321,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1517-32",
    "Frequency_Hz": 15.527492201317042,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1517-4356",
    "Frequency_Hz": 1.5364829524386,
    "prime": 2
  },
  {
    "PSRJ": "J1517-4636",
    "Frequency_Hz": 1.127887471217,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204A",
    "Frequency_Hz": 180.063624055099,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204B",
    "Frequency_Hz": 125.8345875794094,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204C",
    "Frequency_Hz": 402.588227988547,
    "prime": [
      13,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204D",
    "Frequency_Hz": 334.67467287054,
    "prime": [
      5,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204E",
    "Frequency_Hz": 314.2380950037,
    "prime": [
      2,
      157
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204F",
    "Frequency_Hz": 376.7625236987,
    "prime": [
      13,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+0204G",
    "Frequency_Hz": 363.61166596073,
    "prime": [
      2,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518+4904",
    "Frequency_Hz": 24.4289793809236,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518-0627",
    "Frequency_Hz": 1.2578668967903328,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1518-3952",
    "Frequency_Hz": 2.003221376169,
    "prime": 2
  },
  {
    "PSRJ": "J1518-5415",
    "Frequency_Hz": 4.65279017907011,
    "prime": 5
  },
  {
    "PSRJ": "J1518-60",
    "Frequency_Hz": 1.95826698072047,
    "prime": 2
  },
  {
    "PSRJ": "J1519-5734",
    "Frequency_Hz": 1.92768191516,
    "prime": 2
  },
  {
    "PSRJ": "J1519-6106",
    "Frequency_Hz": 0.46418638191,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1519-6308",
    "Frequency_Hz": 0.797415129552,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1520-5402",
    "Frequency_Hz": 3.6941372564085895,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1521-57",
    "Frequency_Hz": 5.757659313425612,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1522-5525",
    "Frequency_Hz": 0.719629121089905,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1522-5735",
    "Frequency_Hz": 9.790868913,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1522-5829",
    "Frequency_Hz": 2.52937356474,
    "prime": 3
  },
  {
    "PSRJ": "J1523-3235",
    "Frequency_Hz": 0.66452487729,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1524-5625",
    "Frequency_Hz": 12.78053428637,
    "prime": 13
  },
  {
    "PSRJ": "J1524-5706",
    "Frequency_Hz": 0.89591729463,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1524-5819",
    "Frequency_Hz": 1.0405365713943844,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1525-5417",
    "Frequency_Hz": 0.9884409562541985,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1525-5523",
    "Frequency_Hz": 2.8156638092021598,
    "prime": 3
  },
  {
    "PSRJ": "J1525-5545",
    "Frequency_Hz": 88.02908501431,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1525-5605",
    "Frequency_Hz": 3.5669868821631145,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1526-2744",
    "Frequency_Hz": 401.7446020972,
    "prime": [
      2,
      3,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1526-5633",
    "Frequency_Hz": 3.312487884287791,
    "prime": 3
  },
  {
    "PSRJ": "J1526-5652",
    "Frequency_Hz": 1.1779770129565692,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1527-3931",
    "Frequency_Hz": 0.41363243246,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1527-5552",
    "Frequency_Hz": 0.9535430745403,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1528-3146",
    "Frequency_Hz": 16.4413566796379,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1528-4109",
    "Frequency_Hz": 1.8991317266911,
    "prime": 2
  },
  {
    "PSRJ": "J1528-5547",
    "Frequency_Hz": 0.2884087221999736,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1528-5838",
    "Frequency_Hz": 2.81146362521,
    "prime": 3
  },
  {
    "PSRJ": "J1529+40",
    "Frequency_Hz": 2.0990764063811924,
    "prime": 2
  },
  {
    "PSRJ": "J1529-26",
    "Frequency_Hz": 1.2515644555694618,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1529-3828",
    "Frequency_Hz": 117.8372326493,
    "prime": [
      2,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1529-5102",
    "Frequency_Hz": 0.7883612649729513,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1529-5355",
    "Frequency_Hz": 1.1220013309541073,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1529-5609",
    "Frequency_Hz": 27.75286187511656,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1529-5611",
    "Frequency_Hz": 1.2161770060285837,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1530-21",
    "Frequency_Hz": 1.9801980198019802,
    "prime": 2
  },
  {
    "PSRJ": "J1530-2114",
    "Frequency_Hz": 1.97887013684,
    "prime": 2
  },
  {
    "PSRJ": "J1530-5327",
    "Frequency_Hz": 3.584743076451,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1530-5724",
    "Frequency_Hz": 1.7604703976902627,
    "prime": 2
  },
  {
    "PSRJ": "J1530-6343",
    "Frequency_Hz": 1.0985150222458,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1531-4012",
    "Frequency_Hz": 2.802302721726,
    "prime": 3
  },
  {
    "PSRJ": "J1531-5610",
    "Frequency_Hz": 11.874941763926,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1532+2745",
    "Frequency_Hz": 0.889018691334,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1532-5308",
    "Frequency_Hz": 2.253142302835217,
    "prime": 2
  },
  {
    "PSRJ": "J1532-56",
    "Frequency_Hz": 1.9121296646204569,
    "prime": 2
  },
  {
    "PSRJ": "J1534-4428",
    "Frequency_Hz": 0.818715145697,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1534-46",
    "Frequency_Hz": 2.74096509380953,
    "prime": 3
  },
  {
    "PSRJ": "J1534-5334",
    "Frequency_Hz": 0.7305228974971,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1534-5405",
    "Frequency_Hz": 3.451961373883,
    "prime": 3
  },
  {
    "PSRJ": "J1535-4114",
    "Frequency_Hz": 2.3101681601,
    "prime": 2
  },
  {
    "PSRJ": "J1535-4415",
    "Frequency_Hz": 2.1349201005945266,
    "prime": 2
  },
  {
    "PSRJ": "J1535-5450",
    "Frequency_Hz": 1.764495730745339,
    "prime": 2
  },
  {
    "PSRJ": "J1535-5848",
    "Frequency_Hz": 3.25542594771,
    "prime": 3
  },
  {
    "PSRJ": "J1536+17",
    "Frequency_Hz": 1.0714668381013608,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1536-30",
    "Frequency_Hz": 0.5260389268805892,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1536-3602",
    "Frequency_Hz": 0.757713811313,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1536-4948",
    "Frequency_Hz": 324.68438438109,
    "prime": [
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1536-5433",
    "Frequency_Hz": 1.1345091894,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1536-5907",
    "Frequency_Hz": 1.792626588826074,
    "prime": 2
  },
  {
    "PSRJ": "J1536-6142",
    "Frequency_Hz": 2.706352621508467,
    "prime": 3
  },
  {
    "PSRJ": "J1536-6149",
    "Frequency_Hz": 145.45109694126523,
    "prime": [
      5,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1537+1155",
    "Frequency_Hz": 26.38213277689397,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1537-4912",
    "Frequency_Hz": 3.31882067385,
    "prime": 3
  },
  {
    "PSRJ": "J1537-5153",
    "Frequency_Hz": 0.6543971110043434,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1537-5312",
    "Frequency_Hz": 144.3606485271861,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1537-5645",
    "Frequency_Hz": 2.3230739673,
    "prime": 2
  },
  {
    "PSRJ": "J1537-61",
    "Frequency_Hz": 2.7063489593411667,
    "prime": 3
  },
  {
    "PSRJ": "J1538+2345",
    "Frequency_Hz": 0.289906755417,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1538-5438",
    "Frequency_Hz": 3.6136810563,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1538-5519",
    "Frequency_Hz": 2.526971383120244,
    "prime": 3
  },
  {
    "PSRJ": "J1538-5551",
    "Frequency_Hz": 9.5532971893,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1538-5621",
    "Frequency_Hz": 0.5239732178900439,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1538-5638",
    "Frequency_Hz": 1.1848616433471302,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1538-5732",
    "Frequency_Hz": 2.93069668519,
    "prime": 3
  },
  {
    "PSRJ": "J1538-5750",
    "Frequency_Hz": 1.974067327788414,
    "prime": 2
  },
  {
    "PSRJ": "J1539-4828",
    "Frequency_Hz": 0.7856437125977354,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1539-5521",
    "Frequency_Hz": 0.9950661454902665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1539-5626",
    "Frequency_Hz": 4.1085170628,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1539-6322",
    "Frequency_Hz": 0.6131785650995321,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1540-5736",
    "Frequency_Hz": 1.63154418204,
    "prime": 2
  },
  {
    "PSRJ": "J1540-5821",
    "Frequency_Hz": 0.2877929732467652,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1541+4703",
    "Frequency_Hz": 3.60099929741,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1541-5535",
    "Frequency_Hz": 3.3802334704914725,
    "prime": 3
  },
  {
    "PSRJ": "J1542-5034",
    "Frequency_Hz": 1.668756430692,
    "prime": 2
  },
  {
    "PSRJ": "J1542-5133",
    "Frequency_Hz": 0.56058054107,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1542-5303",
    "Frequency_Hz": 0.828074420138,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1543+0929",
    "Frequency_Hz": 1.336096688653,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1543-0620",
    "Frequency_Hz": 1.4103082645658,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1543-5013",
    "Frequency_Hz": 1.5521802700551375,
    "prime": 2
  },
  {
    "PSRJ": "J1543-5149",
    "Frequency_Hz": 486.154232083,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1543-5439",
    "Frequency_Hz": 231.8945328823201,
    "prime": [
      2,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1543-5459",
    "Frequency_Hz": 2.6515508603,
    "prime": 3
  },
  {
    "PSRJ": "J1544+4937",
    "Frequency_Hz": 463.11553585637,
    "prime": 463
  },
  {
    "PSRJ": "J1544-0713",
    "Frequency_Hz": 2.065561742743,
    "prime": 2
  },
  {
    "PSRJ": "J1544-5308",
    "Frequency_Hz": 5.600550217377,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1545-4550",
    "Frequency_Hz": 279.6976986512927,
    "prime": [
      2,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1546-3747A",
    "Frequency_Hz": 383.7781214827942,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1546-5302",
    "Frequency_Hz": 1.721620624335,
    "prime": 2
  },
  {
    "PSRJ": "J1546-5925",
    "Frequency_Hz": 128.25891710032076,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1547-0944",
    "Frequency_Hz": 0.6341457157249244,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1547-5056",
    "Frequency_Hz": 2.208568361816503,
    "prime": 2
  },
  {
    "PSRJ": "J1547-5709",
    "Frequency_Hz": 233.03797751128178,
    "prime": 233
  },
  {
    "PSRJ": "J1547-5750",
    "Frequency_Hz": 1.54512280855,
    "prime": 2
  },
  {
    "PSRJ": "J1547-5839",
    "Frequency_Hz": 4.128977499143,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1548-4821",
    "Frequency_Hz": 6.8655515420342,
    "prime": 7
  },
  {
    "PSRJ": "J1548-4927",
    "Frequency_Hz": 1.659087989758,
    "prime": 2
  },
  {
    "PSRJ": "J1548-55",
    "Frequency_Hz": 1.847123557604303,
    "prime": 2
  },
  {
    "PSRJ": "J1548-5607",
    "Frequency_Hz": 5.849949124606,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1549+2113",
    "Frequency_Hz": 0.7920974026334071,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1549-4848",
    "Frequency_Hz": 3.46789015036,
    "prime": 3
  },
  {
    "PSRJ": "J1549-5337",
    "Frequency_Hz": 301.50363935244195,
    "prime": [
      2,
      151
    ],
    "derived": true
  },
  {
    "PSRJ": "J1549-57",
    "Frequency_Hz": 1.3559322033898304,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1549-5722",
    "Frequency_Hz": 2.008950299481654,
    "prime": 2
  },
  {
    "PSRJ": "J1550-5242",
    "Frequency_Hz": 1.333917875234,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1550-5317",
    "Frequency_Hz": 0.703668192870474,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1550-5418",
    "Frequency_Hz": 0.48313075998758587,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1551-0658",
    "Frequency_Hz": 140.96904954747936,
    "prime": [
      3,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1551-4424",
    "Frequency_Hz": 1.48354649394,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1551-5310",
    "Frequency_Hz": 2.20532573802,
    "prime": 2
  },
  {
    "PSRJ": "J1551-6214",
    "Frequency_Hz": 5.029204318571,
    "prime": 5
  },
  {
    "PSRJ": "J1552+5437",
    "Frequency_Hz": 411.88053142429,
    "prime": [
      2,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1552-4937",
    "Frequency_Hz": 159.12642440936054,
    "prime": [
      3,
      53
    ],
    "derived": true
  },
  {
    "PSRJ": "J1553-5456",
    "Frequency_Hz": 0.9247724034,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1554-4854",
    "Frequency_Hz": 2.151562055567963,
    "prime": 2
  },
  {
    "PSRJ": "J1554-5209",
    "Frequency_Hz": 7.985335193676102,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1554-5512",
    "Frequency_Hz": 0.2925653886415671,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1554-5906",
    "Frequency_Hz": 114.91415682656742,
    "prime": [
      5,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1555-0515",
    "Frequency_Hz": 1.0252100262103896,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1555-2341",
    "Frequency_Hz": 1.877658106283,
    "prime": 2
  },
  {
    "PSRJ": "J1555-2908",
    "Frequency_Hz": 559.44000642609,
    "prime": [
      13,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1555-3134",
    "Frequency_Hz": 1.930092665,
    "prime": 2
  },
  {
    "PSRJ": "J1555-53",
    "Frequency_Hz": 0.8540468154302346,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1556-52",
    "Frequency_Hz": 0.8540486170420636,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1556-5358",
    "Frequency_Hz": 1.0053477596790255,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1557-4258",
    "Frequency_Hz": 3.037785303185,
    "prime": 3
  },
  {
    "PSRJ": "J1557-5151",
    "Frequency_Hz": 2.450051363599674,
    "prime": 2
  },
  {
    "PSRJ": "J1557-54",
    "Frequency_Hz": 1.7130373896791073,
    "prime": 2
  },
  {
    "PSRJ": "J1558-5419",
    "Frequency_Hz": 1.6818728617,
    "prime": 2
  },
  {
    "PSRJ": "J1558-5756",
    "Frequency_Hz": 0.890994259795,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1558-67",
    "Frequency_Hz": 3.7415627759402548,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1559-44",
    "Frequency_Hz": 0.8547812187470616,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1559-4438",
    "Frequency_Hz": 3.89018457273,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1559-55",
    "Frequency_Hz": 0.7687949216482656,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1559-5545",
    "Frequency_Hz": 1.04464080328,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1600-3053",
    "Frequency_Hz": 277.9377069896062,
    "prime": [
      2,
      139
    ],
    "derived": true
  },
  {
    "PSRJ": "J1600-49",
    "Frequency_Hz": 3.4779451326331765,
    "prime": 3
  },
  {
    "PSRJ": "J1600-5044",
    "Frequency_Hz": 5.191954610004,
    "prime": 5
  },
  {
    "PSRJ": "J1600-5751",
    "Frequency_Hz": 5.1425347646,
    "prime": 5
  },
  {
    "PSRJ": "J1600-5916",
    "Frequency_Hz": 0.80149644258,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1601-50",
    "Frequency_Hz": 1.1617410781189552,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1601-5244",
    "Frequency_Hz": 0.390723195,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1601-5335",
    "Frequency_Hz": 3.46645281446,
    "prime": 3
  },
  {
    "PSRJ": "J1602+3901",
    "Frequency_Hz": 269.6871628910464,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1602-1009",
    "Frequency_Hz": 320.94720960606,
    "prime": [
      3,
      107
    ],
    "derived": true
  },
  {
    "PSRJ": "J1602-4957",
    "Frequency_Hz": 1.2195270125982385,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1602-5100",
    "Frequency_Hz": 1.157009648847,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1603+18",
    "Frequency_Hz": 1.9880715705765408,
    "prime": 2
  },
  {
    "PSRJ": "J1603-1655",
    "Frequency_Hz": 1.3991884706870015,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1603-2531",
    "Frequency_Hz": 3.53267858106,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1603-2712",
    "Frequency_Hz": 1.284825728082,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1603-3539",
    "Frequency_Hz": 7.0467855718245,
    "prime": 7
  },
  {
    "PSRJ": "J1603-5312",
    "Frequency_Hz": 1.191581506233513,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1603-54",
    "Frequency_Hz": 1.0408150306096935,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1603-5657",
    "Frequency_Hz": 2.01580589294,
    "prime": 2
  },
  {
    "PSRJ": "J1603-7202",
    "Frequency_Hz": 67.3765811248755,
    "prime": 67
  },
  {
    "PSRJ": "J1604-0057",
    "Frequency_Hz": 0.596705240257,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1604-3142",
    "Frequency_Hz": 1.131361918741,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1604-44",
    "Frequency_Hz": 0.7198387561186295,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1604-4718",
    "Frequency_Hz": 1.89585724668,
    "prime": 2
  },
  {
    "PSRJ": "J1604-4832",
    "Frequency_Hz": 129.56711109913334,
    "prime": [
      2,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1604-4909",
    "Frequency_Hz": 3.05419344642,
    "prime": 3
  },
  {
    "PSRJ": "J1604-7203",
    "Frequency_Hz": 2.929090249762291,
    "prime": 3
  },
  {
    "PSRJ": "J1605+3249",
    "Frequency_Hz": 0.14534883720930233,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1605-5215",
    "Frequency_Hz": 0.9865739642,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1605-5228",
    "Frequency_Hz": 0.4559188063316181,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1605-5257",
    "Frequency_Hz": 1.51972574585,
    "prime": 2
  },
  {
    "PSRJ": "J1607-0032",
    "Frequency_Hz": 2.370698719925,
    "prime": 2
  },
  {
    "PSRJ": "J1607-5140",
    "Frequency_Hz": 2.917810026,
    "prime": 3
  },
  {
    "PSRJ": "J1607-6449",
    "Frequency_Hz": 3.354394934906885,
    "prime": 3
  },
  {
    "PSRJ": "J1609-1930",
    "Frequency_Hz": 0.6418826170181251,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1609-4616",
    "Frequency_Hz": 4.0062614244264,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1609-5158",
    "Frequency_Hz": 0.7816149446,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1610-1322",
    "Frequency_Hz": 0.981939436993,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1610-4938",
    "Frequency_Hz": 4.397175781938777,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1610-5006",
    "Frequency_Hz": 2.07848849726,
    "prime": 2
  },
  {
    "PSRJ": "J1610-5303",
    "Frequency_Hz": 1.2715075121863106,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1611-01",
    "Frequency_Hz": 0.7710873102161357,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1611-0114",
    "Frequency_Hz": 0.385545801862,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1611-29",
    "Frequency_Hz": 104.16666666666667,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1611-4811",
    "Frequency_Hz": 0.7710990598043912,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1611-4949",
    "Frequency_Hz": 1.50051397297,
    "prime": 2
  },
  {
    "PSRJ": "J1611-5209",
    "Frequency_Hz": 5.4795543211,
    "prime": 5
  },
  {
    "PSRJ": "J1611-5847",
    "Frequency_Hz": 2.820474141608,
    "prime": 3
  },
  {
    "PSRJ": "J1612+2008",
    "Frequency_Hz": 2.3438635308897773,
    "prime": 2
  },
  {
    "PSRJ": "J1612-2408",
    "Frequency_Hz": 1.0824458865579958,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1612-49",
    "Frequency_Hz": 5.189758749693187,
    "prime": 5
  },
  {
    "PSRJ": "J1612-5022",
    "Frequency_Hz": 0.7308430025108105,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1612-5136",
    "Frequency_Hz": 2.06906321418261,
    "prime": 2
  },
  {
    "PSRJ": "J1612-53",
    "Frequency_Hz": 1.3658950884666345,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1612-55",
    "Frequency_Hz": 1.180767191675119,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1612-5805",
    "Frequency_Hz": 1.6246403844922,
    "prime": 2
  },
  {
    "PSRJ": "J1613-4714",
    "Frequency_Hz": 2.6152212466828,
    "prime": 3
  },
  {
    "PSRJ": "J1613-5211",
    "Frequency_Hz": 2.185717553667,
    "prime": 2
  },
  {
    "PSRJ": "J1613-5234",
    "Frequency_Hz": 1.5262035513,
    "prime": 2
  },
  {
    "PSRJ": "J1614+0737",
    "Frequency_Hz": 0.8286353900733,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1614-2230",
    "Frequency_Hz": 317.3789419337929,
    "prime": 317
  },
  {
    "PSRJ": "J1614-2318",
    "Frequency_Hz": 29.84753873642,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1614-3846",
    "Frequency_Hz": 2.1546787220093084,
    "prime": 2
  },
  {
    "PSRJ": "J1614-3937",
    "Frequency_Hz": 2.4552384068665,
    "prime": 2
  },
  {
    "PSRJ": "J1614-4608",
    "Frequency_Hz": 1.1251213724680549,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1614-5048",
    "Frequency_Hz": 4.316040583,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1614-5144",
    "Frequency_Hz": 0.6518870222982315,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1614-52",
    "Frequency_Hz": 1.9611584719986772,
    "prime": 2
  },
  {
    "PSRJ": "J1614-5402",
    "Frequency_Hz": 1.7464434101543647,
    "prime": 2
  },
  {
    "PSRJ": "J1615-2940",
    "Frequency_Hz": 0.403621636589,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1615-4958",
    "Frequency_Hz": 1.7912880524683932,
    "prime": 2
  },
  {
    "PSRJ": "J1615-5137",
    "Frequency_Hz": 5.57793607323,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1615-5444",
    "Frequency_Hz": 2.770407913190139,
    "prime": 3
  },
  {
    "PSRJ": "J1615-5537",
    "Frequency_Hz": 1.263379784007,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1615-5609",
    "Frequency_Hz": 297.69612965261837,
    "prime": [
      2,
      149
    ],
    "derived": true
  },
  {
    "PSRJ": "J1616-5017",
    "Frequency_Hz": 2.0350677923328617,
    "prime": 2
  },
  {
    "PSRJ": "J1616-5109",
    "Frequency_Hz": 0.8199450771,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1616-5208",
    "Frequency_Hz": 0.9748195411,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1617+1123",
    "Frequency_Hz": 1.11741294517,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1617-4216",
    "Frequency_Hz": 0.2916745530517,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1617-4608",
    "Frequency_Hz": 1.76341893386,
    "prime": 2
  },
  {
    "PSRJ": "J1617-5055",
    "Frequency_Hz": 14.418187147405938,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1618-36",
    "Frequency_Hz": 173.04789429265549,
    "prime": 173
  },
  {
    "PSRJ": "J1618-3921",
    "Frequency_Hz": 83.421562665386,
    "prime": 83
  },
  {
    "PSRJ": "J1618-42",
    "Frequency_Hz": 0.5355795252981926,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1618-4624",
    "Frequency_Hz": 168.5951849713579,
    "prime": [
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1618-4723",
    "Frequency_Hz": 2.456346909,
    "prime": 2
  },
  {
    "PSRJ": "J1619+3953",
    "Frequency_Hz": 0.53084251673,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1619-3345",
    "Frequency_Hz": 0.8631106507854306,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1619-42",
    "Frequency_Hz": 0.9773718860931708,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1620-4927",
    "Frequency_Hz": 5.81616320951,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1620-5414",
    "Frequency_Hz": 0.86478237841,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1621-5039",
    "Frequency_Hz": 0.9224842692278,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1621-5243",
    "Frequency_Hz": 2.688716547019,
    "prime": 3
  },
  {
    "PSRJ": "J1622-0315",
    "Frequency_Hz": 260.049004242,
    "prime": [
      2,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-3751",
    "Frequency_Hz": 1.3671236671802682,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-4332",
    "Frequency_Hz": 1.090585169634,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-4347",
    "Frequency_Hz": 2.18492568145,
    "prime": 2
  },
  {
    "PSRJ": "J1622-4802",
    "Frequency_Hz": 3.772553265152,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-4845",
    "Frequency_Hz": 1.360374591117137,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-4944",
    "Frequency_Hz": 0.9319943359,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-4950",
    "Frequency_Hz": 0.2311059204,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1622-6617",
    "Frequency_Hz": 42.33082901464,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1623-0841",
    "Frequency_Hz": 1.9880122637836473,
    "prime": 2
  },
  {
    "PSRJ": "J1623-0908",
    "Frequency_Hz": 0.7834238655625,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1623-2631",
    "Frequency_Hz": 90.287332005426,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1623-4256",
    "Frequency_Hz": 2.74279572052,
    "prime": 3
  },
  {
    "PSRJ": "J1623-4608",
    "Frequency_Hz": 1.15432653127186,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1623-4931",
    "Frequency_Hz": 2.031087830331047,
    "prime": 2
  },
  {
    "PSRJ": "J1623-4949",
    "Frequency_Hz": 1.37786140033,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1623-5005",
    "Frequency_Hz": 11.7547287226,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1623-6936",
    "Frequency_Hz": 414.95962743561,
    "prime": [
      5,
      83
    ],
    "derived": true
  },
  {
    "PSRJ": "J1624+5850",
    "Frequency_Hz": 1.534211021507671,
    "prime": 2
  },
  {
    "PSRJ": "J1624+8643",
    "Frequency_Hz": 2.52676461497,
    "prime": 3
  },
  {
    "PSRJ": "J1624-39",
    "Frequency_Hz": 337.83783783783787,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1624-4041",
    "Frequency_Hz": 5.95730476591,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1624-4411",
    "Frequency_Hz": 4.288817218684,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1624-4613",
    "Frequency_Hz": 1.1477859251,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1624-4721",
    "Frequency_Hz": 2.2285451070048623,
    "prime": 2
  },
  {
    "PSRJ": "J1625-0021",
    "Frequency_Hz": 352.90623328676,
    "prime": 353
  },
  {
    "PSRJ": "J1625-4048",
    "Frequency_Hz": 0.4245782951859676,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1625-4904",
    "Frequency_Hz": 2.1723098208,
    "prime": 2
  },
  {
    "PSRJ": "J1625-4913",
    "Frequency_Hz": 2.8101233689578997,
    "prime": 3
  },
  {
    "PSRJ": "J1626-44",
    "Frequency_Hz": 3.2430300797525957,
    "prime": 3
  },
  {
    "PSRJ": "J1626-4537",
    "Frequency_Hz": 2.701631834202,
    "prime": 3
  },
  {
    "PSRJ": "J1626-4807",
    "Frequency_Hz": 3.402191551,
    "prime": 3
  },
  {
    "PSRJ": "J1626-6621",
    "Frequency_Hz": 2.2179452040669463,
    "prime": 2
  },
  {
    "PSRJ": "J1627+1419",
    "Frequency_Hz": 2.0372532122390026,
    "prime": 2
  },
  {
    "PSRJ": "J1627+3219",
    "Frequency_Hz": 458.12007798349,
    "prime": [
      2,
      229
    ],
    "derived": true
  },
  {
    "PSRJ": "J1627-4706",
    "Frequency_Hz": 7.105007446,
    "prime": 7
  },
  {
    "PSRJ": "J1627-4845",
    "Frequency_Hz": 1.6331045977468002,
    "prime": 2
  },
  {
    "PSRJ": "J1627-49",
    "Frequency_Hz": 1.6033914936874478,
    "prime": 2
  },
  {
    "PSRJ": "J1627-51",
    "Frequency_Hz": 2.274360677213635,
    "prime": 2
  },
  {
    "PSRJ": "J1627-5547",
    "Frequency_Hz": 2.837163410289,
    "prime": 3
  },
  {
    "PSRJ": "J1627-5936",
    "Frequency_Hz": 2.822993118696,
    "prime": 3
  },
  {
    "PSRJ": "J1628+4406",
    "Frequency_Hz": 5.519419001073,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1628-3205",
    "Frequency_Hz": 311.37434947329,
    "prime": 311
  },
  {
    "PSRJ": "J1628-46",
    "Frequency_Hz": 2.224996545692863,
    "prime": 2
  },
  {
    "PSRJ": "J1628-4804",
    "Frequency_Hz": 1.15477313105,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1628-4828",
    "Frequency_Hz": 0.24168959254968111,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1629+33",
    "Frequency_Hz": 0.6557377049180328,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1629-3636",
    "Frequency_Hz": 0.33465044094549395,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1629-3825",
    "Frequency_Hz": 1.899823440035,
    "prime": 2
  },
  {
    "PSRJ": "J1629-6902",
    "Frequency_Hz": 166.64990604073935,
    "prime": 167
  },
  {
    "PSRJ": "J1630+3550",
    "Frequency_Hz": 309.6784147487,
    "prime": [
      2,
      5,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1630+3734",
    "Frequency_Hz": 301.376187797791,
    "prime": [
      7,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1630-2609",
    "Frequency_Hz": 0.52289775784,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1630-4719",
    "Frequency_Hz": 1.788648879548,
    "prime": 2
  },
  {
    "PSRJ": "J1630-4733",
    "Frequency_Hz": 1.7361972833146253,
    "prime": 2
  },
  {
    "PSRJ": "J1631+1252",
    "Frequency_Hz": 3.223873048411,
    "prime": 3
  },
  {
    "PSRJ": "J1631-1612",
    "Frequency_Hz": 1.4756141935341516,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1631-4155",
    "Frequency_Hz": 1.81408773956,
    "prime": 2
  },
  {
    "PSRJ": "J1631-47",
    "Frequency_Hz": 0.9063440850303743,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1632-1013",
    "Frequency_Hz": 1.3934615174723368,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1632-4509",
    "Frequency_Hz": 0.955283306,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1632-4621",
    "Frequency_Hz": 0.5850663857353,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1632-4757",
    "Frequency_Hz": 4.37505274487,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1632-4818",
    "Frequency_Hz": 1.2289964712,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1632-49",
    "Frequency_Hz": 2.3990233096301834,
    "prime": 2
  },
  {
    "PSRJ": "J1633-2009",
    "Frequency_Hz": 1.0688819089398338,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1633-4453",
    "Frequency_Hz": 2.290915595363787,
    "prime": 2
  },
  {
    "PSRJ": "J1633-4805",
    "Frequency_Hz": 1.4068059720941566,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1633-4859",
    "Frequency_Hz": 0.39764909852949365,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1633-5015",
    "Frequency_Hz": 2.83973126,
    "prime": 3
  },
  {
    "PSRJ": "J1634+02",
    "Frequency_Hz": 471.6981132075472,
    "prime": [
      2,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1634-4229",
    "Frequency_Hz": 0.4962131502100638,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1634-49",
    "Frequency_Hz": 1.4599893729627766,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1634-495",
    "Frequency_Hz": 2.8033552798673673,
    "prime": 3
  },
  {
    "PSRJ": "J1634-5107",
    "Frequency_Hz": 1.97100259922,
    "prime": 2
  },
  {
    "PSRJ": "J1634-5640",
    "Frequency_Hz": 4.4602792232639,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635+2332",
    "Frequency_Hz": 0.8273392603917948,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635+2418",
    "Frequency_Hz": 2.038708913957,
    "prime": 2
  },
  {
    "PSRJ": "J1635-1511",
    "Frequency_Hz": 0.8478980749448799,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635-4513",
    "Frequency_Hz": 0.6270592823179258,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635-46",
    "Frequency_Hz": 0.6716354255448475,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635-47",
    "Frequency_Hz": 1.9808623735845825,
    "prime": 2
  },
  {
    "PSRJ": "J1635-4735",
    "Frequency_Hz": 0.3854191317431968,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635-4944",
    "Frequency_Hz": 1.488174520327063,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1635-5954",
    "Frequency_Hz": 1.8899192477554,
    "prime": 2
  },
  {
    "PSRJ": "J1636-2614",
    "Frequency_Hz": 1.9590413215884461,
    "prime": 2
  },
  {
    "PSRJ": "J1636-4217",
    "Frequency_Hz": 1.801522646941195,
    "prime": 2
  },
  {
    "PSRJ": "J1636-4440",
    "Frequency_Hz": 4.839134848334062,
    "prime": 5
  },
  {
    "PSRJ": "J1636-4803",
    "Frequency_Hz": 0.8301208425281043,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1636-4933",
    "Frequency_Hz": 2.3236006176855404,
    "prime": 2
  },
  {
    "PSRJ": "J1636-51",
    "Frequency_Hz": 2.940255824602685,
    "prime": 3
  },
  {
    "PSRJ": "J1637-4335",
    "Frequency_Hz": 1.296400540598393,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1637-4450",
    "Frequency_Hz": 3.954598770482,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1637-4553",
    "Frequency_Hz": 8.419320078947,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1637-46",
    "Frequency_Hz": 2.028023224921972,
    "prime": 2
  },
  {
    "PSRJ": "J1637-4642",
    "Frequency_Hz": 6.4907074323,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1637-4721",
    "Frequency_Hz": 0.8578231943163646,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1637-4816",
    "Frequency_Hz": 1.1942219218427137,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638+4005",
    "Frequency_Hz": 1.3025575593818264,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-35",
    "Frequency_Hz": 1.4184397163120568,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-3815",
    "Frequency_Hz": 1.432129944579,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-3951",
    "Frequency_Hz": 1.296797801206448,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-4233",
    "Frequency_Hz": 1.9572176926564546,
    "prime": 2
  },
  {
    "PSRJ": "J1638-4344",
    "Frequency_Hz": 0.8913099294501001,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-44",
    "Frequency_Hz": 1.7603878779782967,
    "prime": 2
  },
  {
    "PSRJ": "J1638-4417",
    "Frequency_Hz": 8.48877991026,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-4608",
    "Frequency_Hz": 3.59512083,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-47",
    "Frequency_Hz": 2.3437388855507537,
    "prime": 2
  },
  {
    "PSRJ": "J1638-4713",
    "Frequency_Hz": 15.2114390021296,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-4725",
    "Frequency_Hz": 1.3090145,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1638-5226",
    "Frequency_Hz": 2.936819837174,
    "prime": 3
  },
  {
    "PSRJ": "J1639-1126",
    "Frequency_Hz": 0.698961222411,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1639-4359",
    "Frequency_Hz": 1.7019568042880058,
    "prime": 2
  },
  {
    "PSRJ": "J1639-46",
    "Frequency_Hz": 1.926275651972073,
    "prime": 2
  },
  {
    "PSRJ": "J1639-4604",
    "Frequency_Hz": 1.8899255692793,
    "prime": 2
  },
  {
    "PSRJ": "J1640+2224",
    "Frequency_Hz": 316.123979331869,
    "prime": [
      2,
      79
    ],
    "derived": true
  },
  {
    "PSRJ": "J1640-4631",
    "Frequency_Hz": 4.84395096,
    "prime": 5
  },
  {
    "PSRJ": "J1640-4648",
    "Frequency_Hz": 5.606888385109117,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1640-4715",
    "Frequency_Hz": 1.93257404609,
    "prime": 2
  },
  {
    "PSRJ": "J1640-4951",
    "Frequency_Hz": 1.3529988166659226,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641+3627A",
    "Frequency_Hz": 96.362234567,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641+3627B",
    "Frequency_Hz": 283.4409431836,
    "prime": 283
  },
  {
    "PSRJ": "J1641+3627C",
    "Frequency_Hz": 268.66686619507,
    "prime": 269
  },
  {
    "PSRJ": "J1641+3627D",
    "Frequency_Hz": 320.688695691,
    "prime": [
      3,
      107
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641+3627E",
    "Frequency_Hz": 402.0937023406,
    "prime": [
      2,
      3,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641+3627F",
    "Frequency_Hz": 332.9448049492,
    "prime": [
      3,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641+8049",
    "Frequency_Hz": 494.760636473171,
    "prime": [
      3,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641-2347",
    "Frequency_Hz": 0.9165832019583062,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641-49",
    "Frequency_Hz": 1.257561086029754,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1641-5317",
    "Frequency_Hz": 5.71081786086,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1643+1338",
    "Frequency_Hz": 0.9098791953392347,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1643-1224",
    "Frequency_Hz": 216.3733370950632,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1643-4505",
    "Frequency_Hz": 4.212470392,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1643-4522",
    "Frequency_Hz": 0.7418950894375708,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1643-4550",
    "Frequency_Hz": 1.393673621923,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1644-33",
    "Frequency_Hz": 2.5188916876574305,
    "prime": 3
  },
  {
    "PSRJ": "J1644-44",
    "Frequency_Hz": 5.75008078863508,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1644-4559",
    "Frequency_Hz": 2.197424522481,
    "prime": 2
  },
  {
    "PSRJ": "J1644-46",
    "Frequency_Hz": 3.9850068103766385,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1644-4657",
    "Frequency_Hz": 7.938887555675777,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1645+1012",
    "Frequency_Hz": 2.4339148349627124,
    "prime": 2
  },
  {
    "PSRJ": "J1645-0317",
    "Frequency_Hz": 2.579369213821,
    "prime": 3
  },
  {
    "PSRJ": "J1645-4836",
    "Frequency_Hz": 0.602380608163462,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1646-1910",
    "Frequency_Hz": 0.2075663829,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1646-2142",
    "Frequency_Hz": 170.849405719173,
    "prime": [
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1646-4308",
    "Frequency_Hz": 1.1895132774955357,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1646-4346",
    "Frequency_Hz": 4.3177272236215645,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1646-4545",
    "Frequency_Hz": 2.3159744218,
    "prime": 2
  },
  {
    "PSRJ": "J1646-5123",
    "Frequency_Hz": 1.88652475351,
    "prime": 2
  },
  {
    "PSRJ": "J1646-6831",
    "Frequency_Hz": 0.5600315776458,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1647+6608",
    "Frequency_Hz": 0.62507876955,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1647+6609",
    "Frequency_Hz": 0.625078358705,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1647-3607",
    "Frequency_Hz": 4.709951546942894,
    "prime": 5
  },
  {
    "PSRJ": "J1647-4552",
    "Frequency_Hz": 0.0942448774,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1647-49",
    "Frequency_Hz": 4.039949444072657,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1648-3256",
    "Frequency_Hz": 1.3899355261798,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1648-4458",
    "Frequency_Hz": 1.588230486161856,
    "prime": 2
  },
  {
    "PSRJ": "J1648-4611",
    "Frequency_Hz": 6.06185918633,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1648-6044",
    "Frequency_Hz": 1.713017608242,
    "prime": 2
  },
  {
    "PSRJ": "J1649+2533",
    "Frequency_Hz": 0.9849722779552369,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1649-3012",
    "Frequency_Hz": 292.02,
    "prime": [
      2,
      73
    ],
    "derived": true
  },
  {
    "PSRJ": "J1649-3752",
    "Frequency_Hz": 1.7028754755279765,
    "prime": 2
  },
  {
    "PSRJ": "J1649-3805",
    "Frequency_Hz": 3.8164192851363,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1649-3935",
    "Frequency_Hz": 1.2971686846164028,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1649-4230",
    "Frequency_Hz": 1.4783932821809258,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1649-4349",
    "Frequency_Hz": 1.148485898069,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1649-4653",
    "Frequency_Hz": 1.79521547256,
    "prime": 2
  },
  {
    "PSRJ": "J1649-4729",
    "Frequency_Hz": 3.3591743451,
    "prime": 3
  },
  {
    "PSRJ": "J1649-5553",
    "Frequency_Hz": 1.6298040191522418,
    "prime": 2
  },
  {
    "PSRJ": "J1650-1654",
    "Frequency_Hz": 0.571574196782,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1650-4126",
    "Frequency_Hz": 3.23710816885,
    "prime": 3
  },
  {
    "PSRJ": "J1650-4341",
    "Frequency_Hz": 3.232079127748898,
    "prime": 3
  },
  {
    "PSRJ": "J1650-4502",
    "Frequency_Hz": 2.6255691627,
    "prime": 3
  },
  {
    "PSRJ": "J1650-4601",
    "Frequency_Hz": 7.8664037135,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1650-4921",
    "Frequency_Hz": 6.393848168242,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1650-5025",
    "Frequency_Hz": 16.75723112226696,
    "prime": 17
  },
  {
    "PSRJ": "J1651+14",
    "Frequency_Hz": 1.2077294685990339,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1651-1709",
    "Frequency_Hz": 1.0273309412799,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1651-4246",
    "Frequency_Hz": 1.18471987824,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1651-4519",
    "Frequency_Hz": 1.9325792513956137,
    "prime": 2
  },
  {
    "PSRJ": "J1651-46",
    "Frequency_Hz": 1.7563839286655207,
    "prime": 2
  },
  {
    "PSRJ": "J1651-5222",
    "Frequency_Hz": 1.57465816615,
    "prime": 2
  },
  {
    "PSRJ": "J1651-5255",
    "Frequency_Hz": 1.12291858733,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1651-7642",
    "Frequency_Hz": 0.569699335665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1652+2651",
    "Frequency_Hz": 1.0919378949402874,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1652-1400",
    "Frequency_Hz": 3.273889618011,
    "prime": 3
  },
  {
    "PSRJ": "J1652-2404",
    "Frequency_Hz": 0.5869443142906,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1652-42",
    "Frequency_Hz": 2.0137459506841267,
    "prime": 2
  },
  {
    "PSRJ": "J1652-4237",
    "Frequency_Hz": 2.013903993168838,
    "prime": 2
  },
  {
    "PSRJ": "J1652-4406",
    "Frequency_Hz": 0.12974909238456597,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1652-4838",
    "Frequency_Hz": 264.1921513901342,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1652-5154",
    "Frequency_Hz": 1.6675532491441283,
    "prime": 2
  },
  {
    "PSRJ": "J1653-0158",
    "Frequency_Hz": 508.21219457425644,
    "prime": [
      2,
      127
    ],
    "derived": true
  },
  {
    "PSRJ": "J1653-2054",
    "Frequency_Hz": 242.18087063654272,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1653-3838",
    "Frequency_Hz": 3.2782587687,
    "prime": 3
  },
  {
    "PSRJ": "J1653-4030",
    "Frequency_Hz": 0.98099656939,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1653-4105",
    "Frequency_Hz": 2.0040961080645254,
    "prime": 2
  },
  {
    "PSRJ": "J1653-4249",
    "Frequency_Hz": 1.63249783074,
    "prime": 2
  },
  {
    "PSRJ": "J1653-4315",
    "Frequency_Hz": 2.3850424939027386,
    "prime": 2
  },
  {
    "PSRJ": "J1653-45",
    "Frequency_Hz": 1.051550142642777,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1653-4854",
    "Frequency_Hz": 0.32684976679953237,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1654-23",
    "Frequency_Hz": 1.833652107640073,
    "prime": 2
  },
  {
    "PSRJ": "J1654-26",
    "Frequency_Hz": 0.6158659383025503,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1654-2713",
    "Frequency_Hz": 1.26290939372,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1654-3710",
    "Frequency_Hz": 1.06477508236,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1654-4140",
    "Frequency_Hz": 0.7849631666007422,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1654-4245",
    "Frequency_Hz": 0.9078078525079121,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1655-3048",
    "Frequency_Hz": 1.841838025378,
    "prime": 2
  },
  {
    "PSRJ": "J1655-3844",
    "Frequency_Hz": 0.8379144917160024,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1655-40",
    "Frequency_Hz": 3.6141660853882875,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1655-401",
    "Frequency_Hz": 3.6141464921997684,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1655-404",
    "Frequency_Hz": 0.3416131023300442,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1656+00",
    "Frequency_Hz": 0.6676235938178056,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1656+6203",
    "Frequency_Hz": 1.2884019287190054,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1656-3621",
    "Frequency_Hz": 1.369610830521,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1657+3304",
    "Frequency_Hz": 0.6368309155114987,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1657-0406A",
    "Frequency_Hz": 211.41649048625794,
    "prime": 211
  },
  {
    "PSRJ": "J1657-0406B",
    "Frequency_Hz": 136.0544217687075,
    "prime": [
      2,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1657-4432",
    "Frequency_Hz": 1.64038587209,
    "prime": 2
  },
  {
    "PSRJ": "J1657-46",
    "Frequency_Hz": 1.1206864177412192,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1658+3630",
    "Frequency_Hz": 30.277356639727,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1658-2823",
    "Frequency_Hz": 0.297645623121112,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1658-4306",
    "Frequency_Hz": 0.8573028021181104,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1658-47",
    "Frequency_Hz": 2.7073498321037004,
    "prime": 3
  },
  {
    "PSRJ": "J1658-4958",
    "Frequency_Hz": 2.3987937472184,
    "prime": 2
  },
  {
    "PSRJ": "J1658-5324",
    "Frequency_Hz": 409.95436264371,
    "prime": [
      2,
      5,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1659-1305",
    "Frequency_Hz": 1.560164141185,
    "prime": 2
  },
  {
    "PSRJ": "J1659-4316",
    "Frequency_Hz": 2.108008296787844,
    "prime": 2
  },
  {
    "PSRJ": "J1659-4439",
    "Frequency_Hz": 2.830511326531,
    "prime": 3
  },
  {
    "PSRJ": "J1659-54",
    "Frequency_Hz": 1.8363,
    "prime": 2
  },
  {
    "PSRJ": "J1700-0954",
    "Frequency_Hz": 1.22352355821,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1700-3312",
    "Frequency_Hz": 0.736208688943,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1700-3611",
    "Frequency_Hz": 0.66930344771,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1700-39",
    "Frequency_Hz": 0.2669186378608073,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1700-3919",
    "Frequency_Hz": 1.78411007426,
    "prime": 2
  },
  {
    "PSRJ": "J1700-4012",
    "Frequency_Hz": 3.52370931957,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1700-4422",
    "Frequency_Hz": 1.3235647031577016,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1700-4939",
    "Frequency_Hz": 1.7290166220545216,
    "prime": 2
  },
  {
    "PSRJ": "J1701-3006A",
    "Frequency_Hz": 190.782671214183,
    "prime": 191
  },
  {
    "PSRJ": "J1701-3006B",
    "Frequency_Hz": 278.252964025804,
    "prime": [
      2,
      139
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-3006C",
    "Frequency_Hz": 131.356872901228,
    "prime": 131
  },
  {
    "PSRJ": "J1701-3006D",
    "Frequency_Hz": 292.588403183803,
    "prime": 293
  },
  {
    "PSRJ": "J1701-3006E",
    "Frequency_Hz": 309.239709508853,
    "prime": [
      3,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-3006F",
    "Frequency_Hz": 435.781667403045,
    "prime": [
      2,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-3006G",
    "Frequency_Hz": 217.00905523505,
    "prime": [
      7,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-3006H",
    "Frequency_Hz": 269.92298522974,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-3006I",
    "Frequency_Hz": 303.43334924566,
    "prime": [
      3,
      101
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-3130",
    "Frequency_Hz": 3.4323984034317134,
    "prime": 3
  },
  {
    "PSRJ": "J1701-3726",
    "Frequency_Hz": 0.407395359535,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1701-4533",
    "Frequency_Hz": 3.0968470790462,
    "prime": 3
  },
  {
    "PSRJ": "J1701-4958",
    "Frequency_Hz": 1.2433106199279027,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1702-3932",
    "Frequency_Hz": 2.5619480526009513,
    "prime": 3
  },
  {
    "PSRJ": "J1702-4128",
    "Frequency_Hz": 5.490408716263847,
    "prime": 5
  },
  {
    "PSRJ": "J1702-4145",
    "Frequency_Hz": 2.8918031838753055,
    "prime": 3
  },
  {
    "PSRJ": "J1702-4217",
    "Frequency_Hz": 4.39434966955,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1702-4306",
    "Frequency_Hz": 4.64018878013,
    "prime": 5
  },
  {
    "PSRJ": "J1702-4310",
    "Frequency_Hz": 4.157591600967521,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1702-4428",
    "Frequency_Hz": 0.4709193850078624,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1703-18",
    "Frequency_Hz": 0.7872528026199773,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1703-1846",
    "Frequency_Hz": 1.2432514573471,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1703-3241",
    "Frequency_Hz": 0.8252284566672,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1703-38",
    "Frequency_Hz": 0.1552072016141549,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1703-4442",
    "Frequency_Hz": 0.5723136989002453,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1703-4851",
    "Frequency_Hz": 0.716124231275,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1704-3549",
    "Frequency_Hz": 0.44042250611856965,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1704-3756",
    "Frequency_Hz": 3.2761701723331367,
    "prime": 3
  },
  {
    "PSRJ": "J1704-5236",
    "Frequency_Hz": 4.334473906369,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1704-6016",
    "Frequency_Hz": 3.2645276948874113,
    "prime": 3
  },
  {
    "PSRJ": "J1705-04",
    "Frequency_Hz": 4.210880916287687,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1705-1903",
    "Frequency_Hz": 403.1900395932619,
    "prime": [
      13,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1705-1906",
    "Frequency_Hz": 3.344579548284,
    "prime": 3
  },
  {
    "PSRJ": "J1705-3423",
    "Frequency_Hz": 3.9150137736,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1705-3936",
    "Frequency_Hz": 1.1703001275298168,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1705-3950",
    "Frequency_Hz": 3.1349986738,
    "prime": 3
  },
  {
    "PSRJ": "J1705-4108",
    "Frequency_Hz": 1.1613492651318118,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1705-4331",
    "Frequency_Hz": 4.49314749747,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1705-6135",
    "Frequency_Hz": 1.2367878759228035,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1706+59",
    "Frequency_Hz": 0.6771902024121514,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1706-3839",
    "Frequency_Hz": 1.705648113390176,
    "prime": 2
  },
  {
    "PSRJ": "J1706-4020",
    "Frequency_Hz": 5.536117631427433,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1706-4310",
    "Frequency_Hz": 1.6208005921152808,
    "prime": 2
  },
  {
    "PSRJ": "J1706-4434",
    "Frequency_Hz": 2.3260010316291404,
    "prime": 2
  },
  {
    "PSRJ": "J1706-6118",
    "Frequency_Hz": 2.763031441156565,
    "prime": 3
  },
  {
    "PSRJ": "J1707+35",
    "Frequency_Hz": 6.25782227784731,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1707-4053",
    "Frequency_Hz": 1.72111797519,
    "prime": 2
  },
  {
    "PSRJ": "J1707-4341",
    "Frequency_Hz": 1.1228406882491,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1707-4417",
    "Frequency_Hz": 0.17349734375211046,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1707-4729",
    "Frequency_Hz": 3.7527013778,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708+02",
    "Frequency_Hz": 2.4344405168804104,
    "prime": 2
  },
  {
    "PSRJ": "J1708-3426",
    "Frequency_Hz": 1.44484514046,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-3506",
    "Frequency_Hz": 221.96775106948,
    "prime": [
      2,
      3,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-3641",
    "Frequency_Hz": 1.7019341638867553,
    "prime": 2
  },
  {
    "PSRJ": "J1708-38",
    "Frequency_Hz": 1.4929029632481627,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-3827",
    "Frequency_Hz": 0.8158057495241593,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-4008",
    "Frequency_Hz": 0.090857365,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-4522",
    "Frequency_Hz": 0.77051288025,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-4843",
    "Frequency_Hz": 60.03386149924003,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1708-52",
    "Frequency_Hz": 2.2241003514078552,
    "prime": 2
  },
  {
    "PSRJ": "J1708-7539",
    "Frequency_Hz": 0.8396136457826932,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1709+2313",
    "Frequency_Hz": 215.93608291945586,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1709-0333",
    "Frequency_Hz": 283.76747691122,
    "prime": [
      2,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1709-1640",
    "Frequency_Hz": 1.531251179639,
    "prime": 2
  },
  {
    "PSRJ": "J1709-3626",
    "Frequency_Hz": 2.232847446178,
    "prime": 2
  },
  {
    "PSRJ": "J1709-3841",
    "Frequency_Hz": 1.7036176706,
    "prime": 2
  },
  {
    "PSRJ": "J1709-4342",
    "Frequency_Hz": 0.57607063584577,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1709-4401",
    "Frequency_Hz": 1.155751156623,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1709-4429",
    "Frequency_Hz": 9.75293608435,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1710+4923",
    "Frequency_Hz": 310.536979440897,
    "prime": 311
  },
  {
    "PSRJ": "J1710-2616",
    "Frequency_Hz": 1.0480444461647744,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1710-37",
    "Frequency_Hz": 1.2615761886820864,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1710-3946",
    "Frequency_Hz": 1.0231885214618908,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1710-4148",
    "Frequency_Hz": 3.489655613138381,
    "prime": 3
  },
  {
    "PSRJ": "J1711-1509",
    "Frequency_Hz": 1.1510060470512,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1711-3826",
    "Frequency_Hz": 2.1488525384909223,
    "prime": 2
  },
  {
    "PSRJ": "J1711-4322",
    "Frequency_Hz": 9.74485168391,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1711-5350",
    "Frequency_Hz": 1.11205916031,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1712-2715",
    "Frequency_Hz": 3.916045312473813,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1712-391",
    "Frequency_Hz": 1.2851009254011765,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1712-392",
    "Frequency_Hz": 10.807574380428779,
    "prime": 11
  },
  {
    "PSRJ": "J1713+0747",
    "Frequency_Hz": 218.8118404171605,
    "prime": [
      3,
      73
    ],
    "derived": true
  },
  {
    "PSRJ": "J1713+7810",
    "Frequency_Hz": 2.312000087220481,
    "prime": 2
  },
  {
    "PSRJ": "J1713-3844",
    "Frequency_Hz": 0.6249554554015428,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1713-3949",
    "Frequency_Hz": 2.548086208891088,
    "prime": 3
  },
  {
    "PSRJ": "J1714-1054",
    "Frequency_Hz": 0.478735443017,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1714-3810",
    "Frequency_Hz": 0.26144228295584554,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1714-3830",
    "Frequency_Hz": 11.884953648680769,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1715+46",
    "Frequency_Hz": 1.8244845831052727,
    "prime": 2
  },
  {
    "PSRJ": "J1715-3247",
    "Frequency_Hz": 0.7935159845678931,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1715-3700",
    "Frequency_Hz": 1.2826628261,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1715-3859",
    "Frequency_Hz": 1.07746138421,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1715-3903",
    "Frequency_Hz": 3.5907423095,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1715-4034",
    "Frequency_Hz": 0.482589475307,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1715-4254",
    "Frequency_Hz": 1.74293348861,
    "prime": 2
  },
  {
    "PSRJ": "J1716+34",
    "Frequency_Hz": 473.93364928909955,
    "prime": [
      2,
      3,
      79
    ],
    "derived": true
  },
  {
    "PSRJ": "J1716-3720",
    "Frequency_Hz": 1.58651157291,
    "prime": 2
  },
  {
    "PSRJ": "J1716-3811",
    "Frequency_Hz": 1.2060980316480123,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1716-4005",
    "Frequency_Hz": 3.2070528010971686,
    "prime": 3
  },
  {
    "PSRJ": "J1716-4111",
    "Frequency_Hz": 0.965188290861096,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1716-4711",
    "Frequency_Hz": 1.799128951059,
    "prime": 2
  },
  {
    "PSRJ": "J1717+03",
    "Frequency_Hz": 0.2563445270443476,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1717+4308A",
    "Frequency_Hz": 316.48368670253,
    "prime": [
      2,
      79
    ],
    "derived": true
  },
  {
    "PSRJ": "J1717-3425",
    "Frequency_Hz": 1.52369521716,
    "prime": 2
  },
  {
    "PSRJ": "J1717-3737",
    "Frequency_Hz": 1.4653761798455816,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1717-3847",
    "Frequency_Hz": 0.8699442722329055,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1717-3953",
    "Frequency_Hz": 0.92121695876,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1717-4043",
    "Frequency_Hz": 2.5134630723801026,
    "prime": 3
  },
  {
    "PSRJ": "J1717-40435",
    "Frequency_Hz": 2.8577265839682866,
    "prime": 3
  },
  {
    "PSRJ": "J1717-4054",
    "Frequency_Hz": 1.12648201282,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1717-41",
    "Frequency_Hz": 1.83071670215572,
    "prime": 2
  },
  {
    "PSRJ": "J1717-5800",
    "Frequency_Hz": 3.107583160828,
    "prime": 3
  },
  {
    "PSRJ": "J1718-3714",
    "Frequency_Hz": 0.77556728669,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1718-3718",
    "Frequency_Hz": 0.29598283922,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1718-3825",
    "Frequency_Hz": 13.39141661,
    "prime": 13
  },
  {
    "PSRJ": "J1718-41",
    "Frequency_Hz": 1.8234226664566084,
    "prime": 2
  },
  {
    "PSRJ": "J1718-4539",
    "Frequency_Hz": 1.69355814663,
    "prime": 2
  },
  {
    "PSRJ": "J1719-1438",
    "Frequency_Hz": 172.70704460237,
    "prime": 173
  },
  {
    "PSRJ": "J1719-2330",
    "Frequency_Hz": 2.202678616519635,
    "prime": 2
  },
  {
    "PSRJ": "J1719-3458",
    "Frequency_Hz": 2.025215005221749,
    "prime": 2
  },
  {
    "PSRJ": "J1719-36",
    "Frequency_Hz": 1.3207403383551843,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1719-4006",
    "Frequency_Hz": 5.288361320172832,
    "prime": 5
  },
  {
    "PSRJ": "J1719-4302",
    "Frequency_Hz": 4.2467268180091,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1720+00",
    "Frequency_Hz": 0.29788501638367587,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1720+2150",
    "Frequency_Hz": 0.6189405718020579,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1720-0212",
    "Frequency_Hz": 2.093296452558,
    "prime": 2
  },
  {
    "PSRJ": "J1720-0533",
    "Frequency_Hz": 306.030167430858,
    "prime": [
      2,
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1720-1633",
    "Frequency_Hz": 0.6387302863529,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1720-2446",
    "Frequency_Hz": 1.1438185093073652,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1720-2933",
    "Frequency_Hz": 1.6117360440367,
    "prime": 2
  },
  {
    "PSRJ": "J1720-36",
    "Frequency_Hz": 10.853977961214829,
    "prime": 11
  },
  {
    "PSRJ": "J1720-3659",
    "Frequency_Hz": 2.84799157894,
    "prime": 3
  },
  {
    "PSRJ": "J1721-0855",
    "Frequency_Hz": 0.4584366348,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1721-1936",
    "Frequency_Hz": 0.99597877881,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1721-1939",
    "Frequency_Hz": 2.4750039985719097,
    "prime": 2
  },
  {
    "PSRJ": "J1721-2457",
    "Frequency_Hz": 285.989343507338,
    "prime": [
      2,
      11,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1721-3532",
    "Frequency_Hz": 3.56603038405,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1722+35",
    "Frequency_Hz": 1.2171372930866602,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1722-3207",
    "Frequency_Hz": 2.09574162851,
    "prime": 2
  },
  {
    "PSRJ": "J1722-3632",
    "Frequency_Hz": 2.5050945385182,
    "prime": 3
  },
  {
    "PSRJ": "J1722-3712",
    "Frequency_Hz": 4.2339954686,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1722-4400",
    "Frequency_Hz": 4.57552623855,
    "prime": 5
  },
  {
    "PSRJ": "J1723-2837",
    "Frequency_Hz": 538.870683485,
    "prime": [
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1723-2852",
    "Frequency_Hz": 1.5999131881984363,
    "prime": 2
  },
  {
    "PSRJ": "J1723-3659",
    "Frequency_Hz": 4.93275315878,
    "prime": 5
  },
  {
    "PSRJ": "J1723-38",
    "Frequency_Hz": 1.3058311115902015,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1723-380",
    "Frequency_Hz": 6.6258307880756515,
    "prime": 7
  },
  {
    "PSRJ": "J1723-40",
    "Frequency_Hz": 0.5044812260136834,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1724-3149",
    "Frequency_Hz": 1.05458870231,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1724-35",
    "Frequency_Hz": 0.7032398258778191,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1724-3505",
    "Frequency_Hz": 0.81852640077,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1724-4500",
    "Frequency_Hz": 0.76387845665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1725-0732",
    "Frequency_Hz": 4.1680649269388,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1725-2852",
    "Frequency_Hz": 0.795046779,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1725-3546",
    "Frequency_Hz": 0.9685500193,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1725-38",
    "Frequency_Hz": 2.54685448190358,
    "prime": 3
  },
  {
    "PSRJ": "J1725-3848",
    "Frequency_Hz": 0.48487522450052,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1725-3853",
    "Frequency_Hz": 208.6888563646657,
    "prime": [
      11,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1725-4043",
    "Frequency_Hz": 0.6825606022701337,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1726-00",
    "Frequency_Hz": 0.7641754546843955,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1726-31",
    "Frequency_Hz": 8.099121585471083,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1726-3530",
    "Frequency_Hz": 0.90079341918,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1726-3635",
    "Frequency_Hz": 3.47908898733,
    "prime": 3
  },
  {
    "PSRJ": "J1726-4006",
    "Frequency_Hz": 1.13278729089,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1726-52",
    "Frequency_Hz": 1.5827793605571383,
    "prime": 2
  },
  {
    "PSRJ": "J1727-1609",
    "Frequency_Hz": 408.16326530612247,
    "prime": [
      2,
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1727-2739",
    "Frequency_Hz": 0.7733354277,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1727-2946",
    "Frequency_Hz": 36.92328154303265,
    "prime": 37
  },
  {
    "PSRJ": "J1727-2951",
    "Frequency_Hz": 35.20512723617965,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1728-0007",
    "Frequency_Hz": 2.590648582519,
    "prime": 3
  },
  {
    "PSRJ": "J1728-36",
    "Frequency_Hz": 2.8223858208755344,
    "prime": 3
  },
  {
    "PSRJ": "J1728-3733",
    "Frequency_Hz": 1.6245944281,
    "prime": 2
  },
  {
    "PSRJ": "J1728-4028",
    "Frequency_Hz": 1.154277886,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1729-2117",
    "Frequency_Hz": 15.084571817796597,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1730+13",
    "Frequency_Hz": 0.8695652173913044,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1730-2304",
    "Frequency_Hz": 123.11028714737,
    "prime": [
      3,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1730-2900",
    "Frequency_Hz": 0.65001470845,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1730-3350",
    "Frequency_Hz": 7.16816991526,
    "prime": 7
  },
  {
    "PSRJ": "J1730-3353",
    "Frequency_Hz": 0.30578778579,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1730-34",
    "Frequency_Hz": 10.017073099390602,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1731-1847",
    "Frequency_Hz": 426.51934403983,
    "prime": [
      7,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1731-3123",
    "Frequency_Hz": 1.32793661839,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1731-33",
    "Frequency_Hz": 1.647717096201798,
    "prime": 2
  },
  {
    "PSRJ": "J1731-3322",
    "Frequency_Hz": 1.8359722315794054,
    "prime": 2
  },
  {
    "PSRJ": "J1731-4744",
    "Frequency_Hz": 1.20489823105,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1732-1930",
    "Frequency_Hz": 2.06709800946,
    "prime": 2
  },
  {
    "PSRJ": "J1732-3131",
    "Frequency_Hz": 5.08794112,
    "prime": 5
  },
  {
    "PSRJ": "J1732-3426",
    "Frequency_Hz": 3.0040252844,
    "prime": 3
  },
  {
    "PSRJ": "J1732-35",
    "Frequency_Hz": 7.893282906477072,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1732-3729",
    "Frequency_Hz": 0.4578751754603977,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1732-4128",
    "Frequency_Hz": 1.5924056660364379,
    "prime": 2
  },
  {
    "PSRJ": "J1732-4156",
    "Frequency_Hz": 3.09182036197,
    "prime": 3
  },
  {
    "PSRJ": "J1732-5049",
    "Frequency_Hz": 188.23351221745,
    "prime": [
      2,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1733-01",
    "Frequency_Hz": 3.3112582781456954,
    "prime": 3
  },
  {
    "PSRJ": "J1733-2228",
    "Frequency_Hz": 1.147206256861,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1733-2533",
    "Frequency_Hz": 1.51562424828,
    "prime": 2
  },
  {
    "PSRJ": "J1733-2837",
    "Frequency_Hz": 1.30177050713,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1733-3030",
    "Frequency_Hz": 2.76203446627,
    "prime": 3
  },
  {
    "PSRJ": "J1733-3322",
    "Frequency_Hz": 0.80262320764,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1733-3716",
    "Frequency_Hz": 2.962083952554,
    "prime": 3
  },
  {
    "PSRJ": "J1733-4005",
    "Frequency_Hz": 1.780054548894,
    "prime": 2
  },
  {
    "PSRJ": "J1733-5515",
    "Frequency_Hz": 0.9888912554704785,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1734-0212",
    "Frequency_Hz": 1.191335192834,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1734-2415",
    "Frequency_Hz": 1.6325897834,
    "prime": 2
  },
  {
    "PSRJ": "J1734-2859",
    "Frequency_Hz": 3.317235035786814,
    "prime": 3
  },
  {
    "PSRJ": "J1734-3058",
    "Frequency_Hz": 1.8474532683949056,
    "prime": 2
  },
  {
    "PSRJ": "J1734-3333",
    "Frequency_Hz": 0.855182765,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1735+6320",
    "Frequency_Hz": 1.9580271987034978,
    "prime": 2
  },
  {
    "PSRJ": "J1735-0243",
    "Frequency_Hz": 1.2773235856734166,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1735-0724",
    "Frequency_Hz": 2.38472267479,
    "prime": 2
  },
  {
    "PSRJ": "J1735-25",
    "Frequency_Hz": 8.425831408381933,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1735-28",
    "Frequency_Hz": 2.3333950127415033,
    "prime": 2
  },
  {
    "PSRJ": "J1735-3258",
    "Frequency_Hz": 2.84923231813,
    "prime": 3
  },
  {
    "PSRJ": "J1735-33",
    "Frequency_Hz": 0.7850119243311307,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1736+05",
    "Frequency_Hz": 1.000755570455694,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1736-2457",
    "Frequency_Hz": 0.378469127638,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1736-2819",
    "Frequency_Hz": 0.6279752367,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1736-2843",
    "Frequency_Hz": 0.15515816927,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1736-3422",
    "Frequency_Hz": 2.88,
    "prime": 3
  },
  {
    "PSRJ": "J1736-3511",
    "Frequency_Hz": 1.9888513628192968,
    "prime": 2
  },
  {
    "PSRJ": "J1737-0314A",
    "Frequency_Hz": 505.05656417562,
    "prime": [
      5,
      101
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-0314B",
    "Frequency_Hz": 117.37089201877934,
    "prime": [
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-0314C",
    "Frequency_Hz": 118.20330969267138,
    "prime": [
      2,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-0314D",
    "Frequency_Hz": 346.0207612456747,
    "prime": [
      2,
      173
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-0314E",
    "Frequency_Hz": 438.5964912280702,
    "prime": 439
  },
  {
    "PSRJ": "J1737-0811",
    "Frequency_Hz": 239.51996484444433,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-3102",
    "Frequency_Hz": 1.30094454375,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-3137",
    "Frequency_Hz": 2.2200891113,
    "prime": 2
  },
  {
    "PSRJ": "J1737-32",
    "Frequency_Hz": 1.5771387803742931,
    "prime": 2
  },
  {
    "PSRJ": "J1737-3320",
    "Frequency_Hz": 1.22508021431,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1737-3555",
    "Frequency_Hz": 2.515150138446,
    "prime": 3
  },
  {
    "PSRJ": "J1738+0333",
    "Frequency_Hz": 170.9373698871,
    "prime": [
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1738+04",
    "Frequency_Hz": 0.7184991988733932,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1738-2330",
    "Frequency_Hz": 0.505344668829,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1738-2647",
    "Frequency_Hz": 2.8604856126,
    "prime": 3
  },
  {
    "PSRJ": "J1738-2736",
    "Frequency_Hz": 1.5930783460875826,
    "prime": 2
  },
  {
    "PSRJ": "J1738-2955",
    "Frequency_Hz": 2.2551713364,
    "prime": 2
  },
  {
    "PSRJ": "J1738-3107",
    "Frequency_Hz": 1.8198438376,
    "prime": 2
  },
  {
    "PSRJ": "J1738-3211",
    "Frequency_Hz": 1.3012367996509,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1738-33",
    "Frequency_Hz": 2.795369972806641,
    "prime": 3
  },
  {
    "PSRJ": "J1738-3316",
    "Frequency_Hz": 1.36916434411,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739+0612",
    "Frequency_Hz": 4.270417831207,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-1313",
    "Frequency_Hz": 0.82257292250731,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-2521",
    "Frequency_Hz": 0.5499155021313625,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-26",
    "Frequency_Hz": 2.0402259101345774,
    "prime": 2
  },
  {
    "PSRJ": "J1739-2903",
    "Frequency_Hz": 3.09703753311,
    "prime": 3
  },
  {
    "PSRJ": "J1739-3023",
    "Frequency_Hz": 8.7434194934,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-3049",
    "Frequency_Hz": 4.1785550317,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-31",
    "Frequency_Hz": 3.6087371134253137,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-3131",
    "Frequency_Hz": 1.8887846273,
    "prime": 2
  },
  {
    "PSRJ": "J1739-3159",
    "Frequency_Hz": 1.13952161704,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1739-3951",
    "Frequency_Hz": 2.92592314444,
    "prime": 3
  },
  {
    "PSRJ": "J1740+1000",
    "Frequency_Hz": 6.489247171044,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1740+1311",
    "Frequency_Hz": 1.2452498914006,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1740+27",
    "Frequency_Hz": 0.945000945000945,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1740-2540",
    "Frequency_Hz": 0.59078737729,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1740-3015",
    "Frequency_Hz": 1.6472555453,
    "prime": 2
  },
  {
    "PSRJ": "J1740-3052",
    "Frequency_Hz": 1.7534218544450861,
    "prime": 2
  },
  {
    "PSRJ": "J1740-3327",
    "Frequency_Hz": 1.94174509793,
    "prime": 2
  },
  {
    "PSRJ": "J1740-5340A",
    "Frequency_Hz": 273.9479176156028,
    "prime": [
      2,
      137
    ],
    "derived": true
  },
  {
    "PSRJ": "J1740-5340B",
    "Frequency_Hz": 172.802046855,
    "prime": 173
  },
  {
    "PSRJ": "J1741+1351",
    "Frequency_Hz": 266.8691669720664,
    "prime": [
      3,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741+2758",
    "Frequency_Hz": 0.7348953288583107,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741+3855",
    "Frequency_Hz": 1.206475069716776,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-0840",
    "Frequency_Hz": 0.4894559945292,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-2019",
    "Frequency_Hz": 0.25611432214320273,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-2054",
    "Frequency_Hz": 2.417209833,
    "prime": 2
  },
  {
    "PSRJ": "J1741-21",
    "Frequency_Hz": 0.38986354775828463,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-2152",
    "Frequency_Hz": 0.38977960839,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-2719",
    "Frequency_Hz": 2.88353187692,
    "prime": 3
  },
  {
    "PSRJ": "J1741-2733",
    "Frequency_Hz": 1.11987265911,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-2945",
    "Frequency_Hz": 4.4731155537,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-3016",
    "Frequency_Hz": 0.52805316951,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-34",
    "Frequency_Hz": 1.1426782320939464,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1741-3927",
    "Frequency_Hz": 1.95231424316,
    "prime": 2
  },
  {
    "PSRJ": "J1742+20",
    "Frequency_Hz": 3.9588281868566906,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1742-0203",
    "Frequency_Hz": 7.59822533,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1742-0559",
    "Frequency_Hz": 1.089112170924,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1742-3321",
    "Frequency_Hz": 6.98,
    "prime": 7
  },
  {
    "PSRJ": "J1742-3957",
    "Frequency_Hz": 0.9839138013,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1742-4616",
    "Frequency_Hz": 2.424823923104,
    "prime": 2
  },
  {
    "PSRJ": "J1743+05",
    "Frequency_Hz": 0.6785963912243914,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1743-0339",
    "Frequency_Hz": 2.24897822747,
    "prime": 2
  },
  {
    "PSRJ": "J1743-1351",
    "Frequency_Hz": 2.467080757786,
    "prime": 2
  },
  {
    "PSRJ": "J1743-2442",
    "Frequency_Hz": 0.80482359167,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1743-3150",
    "Frequency_Hz": 0.41413507026,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1743-3153",
    "Frequency_Hz": 5.178320905596,
    "prime": 5
  },
  {
    "PSRJ": "J1743-35",
    "Frequency_Hz": 1.7544475244745428,
    "prime": 2
  },
  {
    "PSRJ": "J1743-4212",
    "Frequency_Hz": 3.266185930826,
    "prime": 3
  },
  {
    "PSRJ": "J1744-1134",
    "Frequency_Hz": 245.4261196898081,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1744-1610",
    "Frequency_Hz": 0.5690852834869012,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1744-2335",
    "Frequency_Hz": 0.593998234019324,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1744-2946",
    "Frequency_Hz": 119.158395816,
    "prime": [
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1744-3130",
    "Frequency_Hz": 0.93801913685,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1744-3922",
    "Frequency_Hz": 5.798971878407754,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1744-5337",
    "Frequency_Hz": 2.811627261406,
    "prime": 3
  },
  {
    "PSRJ": "J1744-7619",
    "Frequency_Hz": 213.33223675351,
    "prime": [
      3,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745+1017",
    "Frequency_Hz": 377.05547013813,
    "prime": [
      13,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745+1252",
    "Frequency_Hz": 0.9435308501088866,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745+42",
    "Frequency_Hz": 3.2776138970829236,
    "prime": 3
  },
  {
    "PSRJ": "J1745-0129",
    "Frequency_Hz": 0.9565653741843637,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745-0952",
    "Frequency_Hz": 51.609431233273,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745-2229",
    "Frequency_Hz": 0.861628837956,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745-23",
    "Frequency_Hz": 184.6142532992404,
    "prime": [
      5,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745-2758",
    "Frequency_Hz": 2.051164249099,
    "prime": 2
  },
  {
    "PSRJ": "J1745-2900",
    "Frequency_Hz": 0.2656936554,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745-2910",
    "Frequency_Hz": 1.0183299389002036,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1745-2912",
    "Frequency_Hz": 5.336765941186704,
    "prime": 5
  },
  {
    "PSRJ": "J1745-3040",
    "Frequency_Hz": 2.721551083248,
    "prime": 3
  },
  {
    "PSRJ": "J1745-3812",
    "Frequency_Hz": 1.4319408594655498,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746+2245",
    "Frequency_Hz": 0.28859714171373435,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746+2540",
    "Frequency_Hz": 0.9450472325784827,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746-2829",
    "Frequency_Hz": 0.5294006322192307,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746-2849",
    "Frequency_Hz": 0.6763701556422352,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746-2850",
    "Frequency_Hz": 0.928417617425803,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746-2856",
    "Frequency_Hz": 1.0579499311145524,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1746-3239",
    "Frequency_Hz": 5.0114923575,
    "prime": 5
  },
  {
    "PSRJ": "J1747-1030",
    "Frequency_Hz": 0.6333953028886989,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1747-2647",
    "Frequency_Hz": 1.9989826997492348,
    "prime": 2
  },
  {
    "PSRJ": "J1747-2802",
    "Frequency_Hz": 0.35970198286,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1747-2809",
    "Frequency_Hz": 19.17440569648584,
    "prime": 19
  },
  {
    "PSRJ": "J1747-2958",
    "Frequency_Hz": 10.120025887,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1747-4036",
    "Frequency_Hz": 607.6775384652,
    "prime": [
      2,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-1300",
    "Frequency_Hz": 2.53720599835,
    "prime": 3
  },
  {
    "PSRJ": "J1748-2021A",
    "Frequency_Hz": 3.464969947246,
    "prime": 3
  },
  {
    "PSRJ": "J1748-2021B",
    "Frequency_Hz": 59.665418222544,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2021C",
    "Frequency_Hz": 160.59270990836,
    "prime": [
      7,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2021D",
    "Frequency_Hz": 74.097014488305,
    "prime": [
      2,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2021E",
    "Frequency_Hz": 61.48547652886,
    "prime": 61
  },
  {
    "PSRJ": "J1748-2021F",
    "Frequency_Hz": 263.5998326931,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2444",
    "Frequency_Hz": 2.2581595818,
    "prime": 2
  },
  {
    "PSRJ": "J1748-2446A",
    "Frequency_Hz": 86.4816368591208,
    "prime": [
      2,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446C",
    "Frequency_Hz": 118.53825305629628,
    "prime": [
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446D",
    "Frequency_Hz": 212.1349687525191,
    "prime": [
      2,
      53
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446E",
    "Frequency_Hz": 455.00045500045496,
    "prime": [
      5,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446F",
    "Frequency_Hz": 180.50085376903834,
    "prime": 181
  },
  {
    "PSRJ": "J1748-2446G",
    "Frequency_Hz": 46.14276479140933,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446H",
    "Frequency_Hz": 203.00899938894293,
    "prime": [
      7,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446I",
    "Frequency_Hz": 104.49113340487494,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446J",
    "Frequency_Hz": 12.447420539712686,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446K",
    "Frequency_Hz": 336.7400198676612,
    "prime": 337
  },
  {
    "PSRJ": "J1748-2446L",
    "Frequency_Hz": 445.4938299104557,
    "prime": [
      5,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446M",
    "Frequency_Hz": 280.1457878680065,
    "prime": [
      2,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446N",
    "Frequency_Hz": 115.38150895937417,
    "prime": [
      5,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446O",
    "Frequency_Hz": 596.4345144724836,
    "prime": [
      2,
      149
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446P",
    "Frequency_Hz": 578.4961414307367,
    "prime": [
      2,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446Q",
    "Frequency_Hz": 355.6187766714083,
    "prime": [
      2,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446R",
    "Frequency_Hz": 198.86487926913182,
    "prime": 199
  },
  {
    "PSRJ": "J1748-2446S",
    "Frequency_Hz": 163.48845117580896,
    "prime": 163
  },
  {
    "PSRJ": "J1748-2446T",
    "Frequency_Hz": 141.1450533598874,
    "prime": [
      3,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446U",
    "Frequency_Hz": 304.03084088849977,
    "prime": [
      2,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446V",
    "Frequency_Hz": 482.50671890606077,
    "prime": [
      3,
      7,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446W",
    "Frequency_Hz": 237.8019490247742,
    "prime": [
      2,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446X",
    "Frequency_Hz": 333.41557584204105,
    "prime": [
      3,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446Y",
    "Frequency_Hz": 488.2431060073432,
    "prime": [
      2,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446Z",
    "Frequency_Hz": 406.07652918268974,
    "prime": [
      2,
      7,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446aa",
    "Frequency_Hz": 172.77005687590272,
    "prime": 173
  },
  {
    "PSRJ": "J1748-2446ab",
    "Frequency_Hz": 195.32356324869963,
    "prime": [
      3,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ac",
    "Frequency_Hz": 196.58299439148718,
    "prime": 197
  },
  {
    "PSRJ": "J1748-2446ad",
    "Frequency_Hz": 716.35556228102,
    "prime": [
      2,
      179
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ae",
    "Frequency_Hz": 273.3293427249295,
    "prime": [
      3,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446af",
    "Frequency_Hz": 302.6322957080688,
    "prime": [
      3,
      101
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ag",
    "Frequency_Hz": 224.8186275722061,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ah",
    "Frequency_Hz": 201.40378437710845,
    "prime": [
      3,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ai",
    "Frequency_Hz": 47.10675049155894,
    "prime": 47
  },
  {
    "PSRJ": "J1748-2446aj",
    "Frequency_Hz": 337.96234149929,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ak",
    "Frequency_Hz": 529.07066473956,
    "prime": [
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446al",
    "Frequency_Hz": 168.0672268907563,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446am",
    "Frequency_Hz": 340.8525546358,
    "prime": [
      11,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446an",
    "Frequency_Hz": 208.23191713844,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ao",
    "Frequency_Hz": 439.68050153408,
    "prime": [
      2,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ap",
    "Frequency_Hz": 267.04459254652,
    "prime": [
      3,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446aq",
    "Frequency_Hz": 79.859813034659,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ar",
    "Frequency_Hz": 512.082391773,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446as",
    "Frequency_Hz": 429.838515818049,
    "prime": [
      2,
      5,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446at",
    "Frequency_Hz": 456.999686853575,
    "prime": 457
  },
  {
    "PSRJ": "J1748-2446au",
    "Frequency_Hz": 219.86646769721,
    "prime": [
      2,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446av",
    "Frequency_Hz": 540.70167993111,
    "prime": 541
  },
  {
    "PSRJ": "J1748-2446aw",
    "Frequency_Hz": 76.633768847072,
    "prime": [
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2446ax",
    "Frequency_Hz": 514.53606048707,
    "prime": [
      5,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-2815",
    "Frequency_Hz": 9.98,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1748-30",
    "Frequency_Hz": 2.6127758993370604,
    "prime": 3
  },
  {
    "PSRJ": "J1748-3009",
    "Frequency_Hz": 103.26352668931,
    "prime": 103
  },
  {
    "PSRJ": "J1749+16",
    "Frequency_Hz": 0.43259143901542185,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1749+5952",
    "Frequency_Hz": 2.293362580627054,
    "prime": 2
  },
  {
    "PSRJ": "J1749-2146",
    "Frequency_Hz": 0.36838442881683314,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1749-2347",
    "Frequency_Hz": 1.14352903909,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1749-2629",
    "Frequency_Hz": 0.74884614571,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1749-3002",
    "Frequency_Hz": 1.63968389547,
    "prime": 2
  },
  {
    "PSRJ": "J1749-4931",
    "Frequency_Hz": 2.2430461291386212,
    "prime": 2
  },
  {
    "PSRJ": "J1749-5417",
    "Frequency_Hz": 3.251221017039581,
    "prime": 3
  },
  {
    "PSRJ": "J1749-5605",
    "Frequency_Hz": 0.7505762249862706,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750+07",
    "Frequency_Hz": 0.5238866099821355,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-2043",
    "Frequency_Hz": 0.17733492662,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-2438",
    "Frequency_Hz": 1.40292980638,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-2444",
    "Frequency_Hz": 1.11188112412,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-2536",
    "Frequency_Hz": 28.77776266305732,
    "prime": 29
  },
  {
    "PSRJ": "J1750-28",
    "Frequency_Hz": 0.7689272522326465,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3116A",
    "Frequency_Hz": 187.51519627,
    "prime": [
      2,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3157",
    "Frequency_Hz": 1.0984627359781,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3503",
    "Frequency_Hz": 1.46195913357,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3703A",
    "Frequency_Hz": 8.96050624775,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3703B",
    "Frequency_Hz": 164.6214621217,
    "prime": [
      3,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3703C",
    "Frequency_Hz": 37.63830424257,
    "prime": [
      2,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1750-3703D",
    "Frequency_Hz": 194.55492232569,
    "prime": [
      3,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1751-0542",
    "Frequency_Hz": 0.499654292364,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1751-2516",
    "Frequency_Hz": 2.5326985081,
    "prime": 3
  },
  {
    "PSRJ": "J1751-2737",
    "Frequency_Hz": 448.43049327354254,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1751-2857",
    "Frequency_Hz": 255.43611088568,
    "prime": [
      3,
      5,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1751-3323",
    "Frequency_Hz": 1.82404901739,
    "prime": 2
  },
  {
    "PSRJ": "J1751-4657",
    "Frequency_Hz": 1.34706655702,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1752+2359",
    "Frequency_Hz": 2.4446829368465055,
    "prime": 2
  },
  {
    "PSRJ": "J1752-2410",
    "Frequency_Hz": 5.23459646155,
    "prime": 5
  },
  {
    "PSRJ": "J1752-2806",
    "Frequency_Hz": 1.777566936351,
    "prime": 2
  },
  {
    "PSRJ": "J1752-2821",
    "Frequency_Hz": 1.56193989928,
    "prime": 2
  },
  {
    "PSRJ": "J1753-12",
    "Frequency_Hz": 2.4663710309924185,
    "prime": 2
  },
  {
    "PSRJ": "J1753-1914",
    "Frequency_Hz": 15.8843898595,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1753-2240",
    "Frequency_Hz": 10.5110682483136,
    "prime": 11
  },
  {
    "PSRJ": "J1753-2501",
    "Frequency_Hz": 1.89273345976,
    "prime": 2
  },
  {
    "PSRJ": "J1753-28",
    "Frequency_Hz": 11.647055548651439,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1753-2819",
    "Frequency_Hz": 53.6952195462,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1753-38",
    "Frequency_Hz": 1.49969106364089,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1754+0032",
    "Frequency_Hz": 226.7162419515734,
    "prime": 227
  },
  {
    "PSRJ": "J1754+48",
    "Frequency_Hz": 1.5337423312883436,
    "prime": 2
  },
  {
    "PSRJ": "J1754+5201",
    "Frequency_Hz": 0.418165652037,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1754-2422",
    "Frequency_Hz": 0.47841211342288076,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1754-3014",
    "Frequency_Hz": 0.7572944029695032,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1754-3443",
    "Frequency_Hz": 2.764791263266,
    "prime": 3
  },
  {
    "PSRJ": "J1754-3510",
    "Frequency_Hz": 2.546445089638,
    "prime": 3
  },
  {
    "PSRJ": "J1755-0903",
    "Frequency_Hz": 5.243573353176057,
    "prime": 5
  },
  {
    "PSRJ": "J1755-1650",
    "Frequency_Hz": 1.3628723398,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1755-2025",
    "Frequency_Hz": 3.1033620128478807,
    "prime": 3
  },
  {
    "PSRJ": "J1755-22",
    "Frequency_Hz": 1.7522730924623695,
    "prime": 2
  },
  {
    "PSRJ": "J1755-2521",
    "Frequency_Hz": 0.850363364,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1755-25211",
    "Frequency_Hz": 0.99550771827,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1755-2534",
    "Frequency_Hz": 4.28191025905,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1755-2550",
    "Frequency_Hz": 3.1726284692188242,
    "prime": 3
  },
  {
    "PSRJ": "J1755-26",
    "Frequency_Hz": 2.3208740364368223,
    "prime": 2
  },
  {
    "PSRJ": "J1755-2725",
    "Frequency_Hz": 3.8174542497,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1755-33",
    "Frequency_Hz": 1.0422464162356977,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1755-3716",
    "Frequency_Hz": 78.2101189443,
    "prime": [
      2,
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1756+1822",
    "Frequency_Hz": 1.34408432377,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1756-2225",
    "Frequency_Hz": 2.4692559061,
    "prime": 2
  },
  {
    "PSRJ": "J1756-2251",
    "Frequency_Hz": 35.1350727145469,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1756-2435",
    "Frequency_Hz": 1.491468881773,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1756-25",
    "Frequency_Hz": 1.1682434058500957,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1756-251",
    "Frequency_Hz": 2.04964359772301,
    "prime": 2
  },
  {
    "PSRJ": "J1756-2619",
    "Frequency_Hz": 1.3802360572907,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1757-1500",
    "Frequency_Hz": 5.575565047498299,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1757-16",
    "Frequency_Hz": 2.2159535358862597,
    "prime": 2
  },
  {
    "PSRJ": "J1757-1854",
    "Frequency_Hz": 46.5176166256671,
    "prime": 47
  },
  {
    "PSRJ": "J1757-2223",
    "Frequency_Hz": 5.39635989339,
    "prime": 5
  },
  {
    "PSRJ": "J1757-2421",
    "Frequency_Hz": 4.27150796279,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1757-26",
    "Frequency_Hz": 2.8212007594672444,
    "prime": 3
  },
  {
    "PSRJ": "J1757-2745",
    "Frequency_Hz": 56.538013330516,
    "prime": [
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1757-5322",
    "Frequency_Hz": 112.7400644012726,
    "prime": 113
  },
  {
    "PSRJ": "J1757-6032",
    "Frequency_Hz": 343.34786701089,
    "prime": [
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1758+3030",
    "Frequency_Hz": 1.0556808296806777,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1758-1931",
    "Frequency_Hz": 1.44393577539,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1758-2206",
    "Frequency_Hz": 2.32407749833,
    "prime": 2
  },
  {
    "PSRJ": "J1758-24",
    "Frequency_Hz": 1.5795155783672705,
    "prime": 2
  },
  {
    "PSRJ": "J1758-25",
    "Frequency_Hz": 1.6515230262772176,
    "prime": 2
  },
  {
    "PSRJ": "J1758-2540",
    "Frequency_Hz": 0.47454913024,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1758-2630",
    "Frequency_Hz": 0.8313288172,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1758-2846",
    "Frequency_Hz": 1.3042802538,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759+5036",
    "Frequency_Hz": 5.68129049266819,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-1029",
    "Frequency_Hz": 0.39804752723442755,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-1736",
    "Frequency_Hz": 1.25242411862,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-1903",
    "Frequency_Hz": 1.3670437715,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-1940",
    "Frequency_Hz": 3.92587396764,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-1956",
    "Frequency_Hz": 0.35169302087,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-2205",
    "Frequency_Hz": 2.1692763393033,
    "prime": 2
  },
  {
    "PSRJ": "J1759-2302",
    "Frequency_Hz": 1.23347493727,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-2307",
    "Frequency_Hz": 1.78926509015,
    "prime": 2
  },
  {
    "PSRJ": "J1759-24",
    "Frequency_Hz": 0.685993857610999,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-2549",
    "Frequency_Hz": 1.04542524405,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-2922",
    "Frequency_Hz": 1.740946263509,
    "prime": 2
  },
  {
    "PSRJ": "J1759-3107",
    "Frequency_Hz": 0.9268222396651,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1759-5505",
    "Frequency_Hz": 2.6781496751,
    "prime": 3
  },
  {
    "PSRJ": "J1800+5034",
    "Frequency_Hz": 1.72898175945,
    "prime": 2
  },
  {
    "PSRJ": "J1800-0125",
    "Frequency_Hz": 1.2768367306399808,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1800-2114",
    "Frequency_Hz": 0.5557801858,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1800-2343",
    "Frequency_Hz": 0.9701014726140353,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0357",
    "Frequency_Hz": 1.0851949736698,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857A",
    "Frequency_Hz": 139.36088855893,
    "prime": 139
  },
  {
    "PSRJ": "J1801-0857B",
    "Frequency_Hz": 34.52849284047,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857C",
    "Frequency_Hz": 267.47267670678,
    "prime": [
      3,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857D",
    "Frequency_Hz": 236.60059797388,
    "prime": [
      3,
      79
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857E",
    "Frequency_Hz": 131.55003246018,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857F",
    "Frequency_Hz": 40.1735738912,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857G",
    "Frequency_Hz": 19.3830879941,
    "prime": 19
  },
  {
    "PSRJ": "J1801-0857H",
    "Frequency_Hz": 177.21938880576,
    "prime": [
      3,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857I",
    "Frequency_Hz": 307.2974449774,
    "prime": 307
  },
  {
    "PSRJ": "J1801-0857K",
    "Frequency_Hz": 104.2699714144,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857L",
    "Frequency_Hz": 165.0902463911,
    "prime": [
      3,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857M",
    "Frequency_Hz": 186.6773548929,
    "prime": [
      11,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857N",
    "Frequency_Hz": 200.217023228,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-0857O",
    "Frequency_Hz": 233.2571878284,
    "prime": 233
  },
  {
    "PSRJ": "J1801-1417",
    "Frequency_Hz": 275.85470899694,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-1855",
    "Frequency_Hz": 0.39208025942,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-1909",
    "Frequency_Hz": 0.90193703186,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-2115",
    "Frequency_Hz": 2.2825153353,
    "prime": 2
  },
  {
    "PSRJ": "J1801-2154",
    "Frequency_Hz": 2.66452256901,
    "prime": 3
  },
  {
    "PSRJ": "J1801-2304",
    "Frequency_Hz": 2.4048457283,
    "prime": 2
  },
  {
    "PSRJ": "J1801-2451",
    "Frequency_Hz": 8.0048537226,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-2920",
    "Frequency_Hz": 0.9242904360771,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-3210",
    "Frequency_Hz": 134.16363857905,
    "prime": [
      2,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1801-3458",
    "Frequency_Hz": 0.72170711979,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1802+0128",
    "Frequency_Hz": 1.8042021906400898,
    "prime": 2
  },
  {
    "PSRJ": "J1802+03",
    "Frequency_Hz": 1.5053439710973957,
    "prime": 2
  },
  {
    "PSRJ": "J1802-0523",
    "Frequency_Hz": 0.5950351566703048,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1802-1745",
    "Frequency_Hz": 1.94298740055,
    "prime": 2
  },
  {
    "PSRJ": "J1802-2124",
    "Frequency_Hz": 79.06642422995,
    "prime": 79
  },
  {
    "PSRJ": "J1802-2426",
    "Frequency_Hz": 1.75744734512,
    "prime": 2
  },
  {
    "PSRJ": "J1802-3346",
    "Frequency_Hz": 0.4063303018512618,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803+1358",
    "Frequency_Hz": 657.8947368421052,
    "prime": [
      2,
      7,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803+47",
    "Frequency_Hz": 2.882675122513693,
    "prime": 3
  },
  {
    "PSRJ": "J1803-1616",
    "Frequency_Hz": 1.86360004634,
    "prime": 2
  },
  {
    "PSRJ": "J1803-1857",
    "Frequency_Hz": 0.349120841186,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803-1920",
    "Frequency_Hz": 2.25403455265,
    "prime": 2
  },
  {
    "PSRJ": "J1803-2137",
    "Frequency_Hz": 7.477755243,
    "prime": 7
  },
  {
    "PSRJ": "J1803-2149",
    "Frequency_Hz": 9.4043245048,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803-2712",
    "Frequency_Hz": 2.990292674144,
    "prime": 3
  },
  {
    "PSRJ": "J1803-3002A",
    "Frequency_Hz": 140.8174521908,
    "prime": [
      3,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803-3002B",
    "Frequency_Hz": 227.42779167614285,
    "prime": 227
  },
  {
    "PSRJ": "J1803-3002C",
    "Frequency_Hz": 171.22104938954,
    "prime": [
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803-3002D",
    "Frequency_Hz": 180.83182640144665,
    "prime": 181
  },
  {
    "PSRJ": "J1803-3002E",
    "Frequency_Hz": 55.7848934508535,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1803-3002F",
    "Frequency_Hz": 6.750553545390723,
    "prime": 7
  },
  {
    "PSRJ": "J1803-3329",
    "Frequency_Hz": 1.5787513128702184,
    "prime": 2
  },
  {
    "PSRJ": "J1803-6707",
    "Frequency_Hz": 468.46771214902,
    "prime": [
      2,
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1804-0735",
    "Frequency_Hz": 43.28844052279,
    "prime": 43
  },
  {
    "PSRJ": "J1804-17",
    "Frequency_Hz": 3.561496575051204,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1804-2228",
    "Frequency_Hz": 1.7528157081,
    "prime": 2
  },
  {
    "PSRJ": "J1804-2717",
    "Frequency_Hz": 107.031649219533,
    "prime": 107
  },
  {
    "PSRJ": "J1804-28",
    "Frequency_Hz": 0.7855391665900766,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1804-2858",
    "Frequency_Hz": 669.93358254482,
    "prime": [
      2,
      5,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1805+0306",
    "Frequency_Hz": 4.57223191539,
    "prime": 5
  },
  {
    "PSRJ": "J1805+0615",
    "Frequency_Hz": 469.72472452336,
    "prime": [
      2,
      5,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1805-0619",
    "Frequency_Hz": 2.1994874968,
    "prime": 2
  },
  {
    "PSRJ": "J1805-1504",
    "Frequency_Hz": 0.84654706542,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1805-2032",
    "Frequency_Hz": 2.4644534146,
    "prime": 2
  },
  {
    "PSRJ": "J1805-2037",
    "Frequency_Hz": 2.79480454257,
    "prime": 3
  },
  {
    "PSRJ": "J1805-2447",
    "Frequency_Hz": 1.51194033937,
    "prime": 2
  },
  {
    "PSRJ": "J1805-2948",
    "Frequency_Hz": 2.3345886215576828,
    "prime": 2
  },
  {
    "PSRJ": "J1806+1023",
    "Frequency_Hz": 2.0648935765381635,
    "prime": 2
  },
  {
    "PSRJ": "J1806+2819",
    "Frequency_Hz": 66.29541235746487,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1806-1154",
    "Frequency_Hz": 1.913437903034,
    "prime": 2
  },
  {
    "PSRJ": "J1806-1618",
    "Frequency_Hz": 1.49631336087,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1806-1920",
    "Frequency_Hz": 1.1366337475,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1806-2125",
    "Frequency_Hz": 2.075444041,
    "prime": 2
  },
  {
    "PSRJ": "J1806-21250",
    "Frequency_Hz": 5.8138182832957375,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1806-2133",
    "Frequency_Hz": 3.043598946184301,
    "prime": 3
  },
  {
    "PSRJ": "J1807+04",
    "Frequency_Hz": 1.2517211165352358,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1807+0756",
    "Frequency_Hz": 2.1537775958626826,
    "prime": 2
  },
  {
    "PSRJ": "J1807-0847",
    "Frequency_Hz": 6.107713115944,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1807-2459A",
    "Frequency_Hz": 326.85626268597804,
    "prime": [
      3,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J1807-2459B",
    "Frequency_Hz": 238.8814308484987,
    "prime": 239
  },
  {
    "PSRJ": "J1807-2557",
    "Frequency_Hz": 0.3617689949950751,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1807-2715",
    "Frequency_Hz": 1.2080409765316,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808+00",
    "Frequency_Hz": 2.352304670500923,
    "prime": 2
  },
  {
    "PSRJ": "J1808-0813",
    "Frequency_Hz": 1.1414935948951,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-1020",
    "Frequency_Hz": 1.675060948441,
    "prime": 2
  },
  {
    "PSRJ": "J1808-14",
    "Frequency_Hz": 1.1955687440072116,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-1517",
    "Frequency_Hz": 1.836377892123,
    "prime": 2
  },
  {
    "PSRJ": "J1808-1726",
    "Frequency_Hz": 4.148782855,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-19",
    "Frequency_Hz": 9.83612039804812,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-2024",
    "Frequency_Hz": 0.13234655740134887,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-2057",
    "Frequency_Hz": 1.088837931564,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-2701",
    "Frequency_Hz": 0.406854393535,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1808-3249",
    "Frequency_Hz": 2.740348781061,
    "prime": 3
  },
  {
    "PSRJ": "J1809+17",
    "Frequency_Hz": 0.48386316349736297,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-0119",
    "Frequency_Hz": 1.3423243982658792,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-0743",
    "Frequency_Hz": 3.185873330481998,
    "prime": 3
  },
  {
    "PSRJ": "J1809-1429",
    "Frequency_Hz": 1.116957930831,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-1850",
    "Frequency_Hz": 0.8892990815,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-1917",
    "Frequency_Hz": 12.08252485412,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-1943",
    "Frequency_Hz": 0.1804812154,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-20",
    "Frequency_Hz": 17.465354413084622,
    "prime": 17
  },
  {
    "PSRJ": "J1809-2004",
    "Frequency_Hz": 2.2998477764,
    "prime": 2
  },
  {
    "PSRJ": "J1809-2109",
    "Frequency_Hz": 1.4236560068875,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1809-2332",
    "Frequency_Hz": 6.8125205463,
    "prime": 7
  },
  {
    "PSRJ": "J1809-3547",
    "Frequency_Hz": 1.162266543844072,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1810+0705",
    "Frequency_Hz": 3.250100070223651,
    "prime": 3
  },
  {
    "PSRJ": "J1810+1744",
    "Frequency_Hz": 601.4115160817478,
    "prime": 601
  },
  {
    "PSRJ": "J1810-1441",
    "Frequency_Hz": 4.60376541217,
    "prime": 5
  },
  {
    "PSRJ": "J1810-1709",
    "Frequency_Hz": 0.8612280951985765,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1810-1820",
    "Frequency_Hz": 6.5054918751,
    "prime": 7
  },
  {
    "PSRJ": "J1810-2005",
    "Frequency_Hz": 30.467142155106,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1810-5338",
    "Frequency_Hz": 3.8306868647,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1811+0702",
    "Frequency_Hz": 2.1658491322833684,
    "prime": 2
  },
  {
    "PSRJ": "J1811-0154",
    "Frequency_Hz": 1.0811442985749,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1811-0624",
    "Frequency_Hz": 241.2147450264,
    "prime": 241
  },
  {
    "PSRJ": "J1811-1049",
    "Frequency_Hz": 0.3811181038804789,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1811-1717",
    "Frequency_Hz": 2.5550282764226897,
    "prime": 3
  },
  {
    "PSRJ": "J1811-1736",
    "Frequency_Hz": 9.59859125268319,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1811-1835",
    "Frequency_Hz": 1.7938390569,
    "prime": 2
  },
  {
    "PSRJ": "J1811-1925",
    "Frequency_Hz": 15.463837815268993,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1811-2405",
    "Frequency_Hz": 375.8560200428804,
    "prime": [
      2,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1811-2439",
    "Frequency_Hz": 2.40492755379,
    "prime": 2
  },
  {
    "PSRJ": "J1811-4930",
    "Frequency_Hz": 0.6979803561007,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812+0226",
    "Frequency_Hz": 1.25960003849,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-12",
    "Frequency_Hz": 0.6944603591610086,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-15",
    "Frequency_Hz": 0.9856790688092701,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-17",
    "Frequency_Hz": 0.4582914643980102,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-1718",
    "Frequency_Hz": 0.82961772349,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-1733",
    "Frequency_Hz": 1.857557562173,
    "prime": 2
  },
  {
    "PSRJ": "J1812-1910",
    "Frequency_Hz": 2.3202341687,
    "prime": 2
  },
  {
    "PSRJ": "J1812-20",
    "Frequency_Hz": 0.525455154330578,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-2102",
    "Frequency_Hz": 0.81742601326,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-2526",
    "Frequency_Hz": 3.16620972153,
    "prime": 3
  },
  {
    "PSRJ": "J1812-2748",
    "Frequency_Hz": 4.219706488219226,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1812-3039",
    "Frequency_Hz": 1.702194947876768,
    "prime": 2
  },
  {
    "PSRJ": "J1813+1822",
    "Frequency_Hz": 2.9724335643293496,
    "prime": 3
  },
  {
    "PSRJ": "J1813+4013",
    "Frequency_Hz": 1.074011086779,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1813-0402",
    "Frequency_Hz": 243.5128458889,
    "prime": [
      2,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1813-1246",
    "Frequency_Hz": 20.802023359,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1813-14",
    "Frequency_Hz": 0.9658037853713565,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1813-17",
    "Frequency_Hz": 2.720412588654846,
    "prime": 3
  },
  {
    "PSRJ": "J1813-1749",
    "Frequency_Hz": 22.351083818,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1813-2113",
    "Frequency_Hz": 2.344843177122,
    "prime": 2
  },
  {
    "PSRJ": "J1813-2242",
    "Frequency_Hz": 3.04400829778,
    "prime": 3
  },
  {
    "PSRJ": "J1813-2621",
    "Frequency_Hz": 225.73304176818354,
    "prime": [
      2,
      113
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814+1130",
    "Frequency_Hz": 1.331095114578662,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814+22",
    "Frequency_Hz": 3.941663381947182,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814+31",
    "Frequency_Hz": 478.4688995215311,
    "prime": [
      2,
      239
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814-0521",
    "Frequency_Hz": 0.9859798740203646,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814-0618",
    "Frequency_Hz": 0.72575866505,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814-1649",
    "Frequency_Hz": 1.04442576171,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814-1744",
    "Frequency_Hz": 0.251515052,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1814-1845",
    "Frequency_Hz": 0.9174404512339115,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1815+5546",
    "Frequency_Hz": 2.3427772328,
    "prime": 2
  },
  {
    "PSRJ": "J1815-1738",
    "Frequency_Hz": 5.03887545888,
    "prime": 5
  },
  {
    "PSRJ": "J1815-1910",
    "Frequency_Hz": 0.80004893907,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1816+4510",
    "Frequency_Hz": 313.174935322,
    "prime": 313
  },
  {
    "PSRJ": "J1816-0755",
    "Frequency_Hz": 4.59468679946,
    "prime": 5
  },
  {
    "PSRJ": "J1816-1446",
    "Frequency_Hz": 1.6820863075,
    "prime": 2
  },
  {
    "PSRJ": "J1816-1729",
    "Frequency_Hz": 1.2782498950301,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1816-2650",
    "Frequency_Hz": 1.68666719259,
    "prime": 2
  },
  {
    "PSRJ": "J1816-5643",
    "Frequency_Hz": 4.588779257702033,
    "prime": 5
  },
  {
    "PSRJ": "J1817-0743",
    "Frequency_Hz": 2.2826081287,
    "prime": 2
  },
  {
    "PSRJ": "J1817-1511",
    "Frequency_Hz": 4.4522836855,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1817-1742",
    "Frequency_Hz": 6.67806213863,
    "prime": 7
  },
  {
    "PSRJ": "J1817-19",
    "Frequency_Hz": 0.8136133790584053,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1817-1938",
    "Frequency_Hz": 0.4885585382448799,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1817-2311",
    "Frequency_Hz": 1.598797704126497,
    "prime": 2
  },
  {
    "PSRJ": "J1817-3618",
    "Frequency_Hz": 2.5838477032,
    "prime": 3
  },
  {
    "PSRJ": "J1817-3837",
    "Frequency_Hz": 2.60086625589,
    "prime": 3
  },
  {
    "PSRJ": "J1818-0151",
    "Frequency_Hz": 1.1939800286569984,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1818-1116",
    "Frequency_Hz": 1.83553757789,
    "prime": 2
  },
  {
    "PSRJ": "J1818-1422",
    "Frequency_Hz": 3.430655769877,
    "prime": 3
  },
  {
    "PSRJ": "J1818-1448",
    "Frequency_Hz": 3.5540227403612645,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1818-1502",
    "Frequency_Hz": 1.7465751271226104,
    "prime": 2
  },
  {
    "PSRJ": "J1818-1519",
    "Frequency_Hz": 1.0641806956,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1818-1541",
    "Frequency_Hz": 1.81444150622,
    "prime": 2
  },
  {
    "PSRJ": "J1818-1556",
    "Frequency_Hz": 1.049638559039587,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1818-1607",
    "Frequency_Hz": 0.733411,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819+0322",
    "Frequency_Hz": 1.25130512248,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819+1305",
    "Frequency_Hz": 0.9430725552993,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-0925",
    "Frequency_Hz": 1.173640768061,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-1008",
    "Frequency_Hz": 3.31686125551,
    "prime": 3
  },
  {
    "PSRJ": "J1819-1114",
    "Frequency_Hz": 3.39947879385,
    "prime": 3
  },
  {
    "PSRJ": "J1819-1131",
    "Frequency_Hz": 0.72038992361,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-1318",
    "Frequency_Hz": 0.65976291081,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-1408",
    "Frequency_Hz": 0.5591307454,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-1458",
    "Frequency_Hz": 0.234564843,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-1510",
    "Frequency_Hz": 4.41425116122,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-17",
    "Frequency_Hz": 0.42514566553365346,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1819-1717",
    "Frequency_Hz": 2.5411563287780794,
    "prime": 3
  },
  {
    "PSRJ": "J1819-37",
    "Frequency_Hz": 1.5822784810126582,
    "prime": 2
  },
  {
    "PSRJ": "J1820-0427",
    "Frequency_Hz": 1.672008955802,
    "prime": 2
  },
  {
    "PSRJ": "J1820-0509",
    "Frequency_Hz": 2.96453250558,
    "prime": 3
  },
  {
    "PSRJ": "J1820-1346",
    "Frequency_Hz": 1.085234618514,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1820-1529",
    "Frequency_Hz": 3.000716562,
    "prime": 3
  },
  {
    "PSRJ": "J1820-1818",
    "Frequency_Hz": 3.2267987243482,
    "prime": 3
  },
  {
    "PSRJ": "J1820-19",
    "Frequency_Hz": 222.67734651269697,
    "prime": 223
  },
  {
    "PSRJ": "J1820-20",
    "Frequency_Hz": 370.3975534352642,
    "prime": [
      2,
      5,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1821+0155",
    "Frequency_Hz": 29.60243924099346,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1821+1715",
    "Frequency_Hz": 0.731699075952546,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1821+4147",
    "Frequency_Hz": 0.792482693574,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1821-0256",
    "Frequency_Hz": 2.41481119709,
    "prime": 2
  },
  {
    "PSRJ": "J1821-0331",
    "Frequency_Hz": 1.1082596462490326,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1821-1419",
    "Frequency_Hz": 0.6038612447,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1821-1432",
    "Frequency_Hz": 0.5221575821706081,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822+02",
    "Frequency_Hz": 0.6631299734748011,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822+0705",
    "Frequency_Hz": 0.733774022731,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822+1120",
    "Frequency_Hz": 0.5595855647556034,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822+2617",
    "Frequency_Hz": 1.6908526634,
    "prime": 2
  },
  {
    "PSRJ": "J1822-0719",
    "Frequency_Hz": 2.003704715289465,
    "prime": 2
  },
  {
    "PSRJ": "J1822-0848",
    "Frequency_Hz": 1.1978353592068969,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822-0902",
    "Frequency_Hz": 6.7161644853685,
    "prime": 7
  },
  {
    "PSRJ": "J1822-0907",
    "Frequency_Hz": 1.02595631163,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822-1252",
    "Frequency_Hz": 0.48284913301,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822-1400",
    "Frequency_Hz": 4.65611972198,
    "prime": 5
  },
  {
    "PSRJ": "J1822-1604",
    "Frequency_Hz": 0.1185154135,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822-1617",
    "Frequency_Hz": 1.2031439681,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822-2256",
    "Frequency_Hz": 0.5335414804559,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1822-4209",
    "Frequency_Hz": 2.190521178604,
    "prime": 2
  },
  {
    "PSRJ": "J1823+0550",
    "Frequency_Hz": 1.3281857031157,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-0154",
    "Frequency_Hz": 1.3161733951223,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-11",
    "Frequency_Hz": 3.4942505601283647,
    "prime": 3
  },
  {
    "PSRJ": "J1823-1115",
    "Frequency_Hz": 3.57361490181,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-1126",
    "Frequency_Hz": 0.54155509235,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-1347",
    "Frequency_Hz": 1.6204639826,
    "prime": 2
  },
  {
    "PSRJ": "J1823-1526",
    "Frequency_Hz": 0.61523110201,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-1807",
    "Frequency_Hz": 0.61095100906,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3021A",
    "Frequency_Hz": 183.82338873033987,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3021B",
    "Frequency_Hz": 2.6413345622855298,
    "prime": 3
  },
  {
    "PSRJ": "J1823-3021C",
    "Frequency_Hz": 2.463442737702534,
    "prime": 2
  },
  {
    "PSRJ": "J1823-3021D",
    "Frequency_Hz": 331.11922067260446,
    "prime": 331
  },
  {
    "PSRJ": "J1823-3021E",
    "Frequency_Hz": 227.5830678197542,
    "prime": [
      2,
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3021F",
    "Frequency_Hz": 206.18556701030928,
    "prime": [
      2,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3021G",
    "Frequency_Hz": 164.168745585,
    "prime": [
      2,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3021H",
    "Frequency_Hz": 194.9317738791423,
    "prime": [
      3,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3106",
    "Frequency_Hz": 3.52042385334,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1823-3543",
    "Frequency_Hz": 421.3525986326,
    "prime": 421
  },
  {
    "PSRJ": "J1824+1014",
    "Frequency_Hz": 245.9470303118,
    "prime": [
      2,
      3,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-0127",
    "Frequency_Hz": 0.4000847453262,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-0132",
    "Frequency_Hz": 4.469702840422409,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-0621",
    "Frequency_Hz": 309.30868547671,
    "prime": [
      3,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-1118",
    "Frequency_Hz": 2.29484628787,
    "prime": 2
  },
  {
    "PSRJ": "J1824-1159",
    "Frequency_Hz": 2.75868097559,
    "prime": 3
  },
  {
    "PSRJ": "J1824-1350",
    "Frequency_Hz": 0.7160253766806935,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-1423",
    "Frequency_Hz": 2.78246033036,
    "prime": 3
  },
  {
    "PSRJ": "J1824-1500",
    "Frequency_Hz": 2.4258304842,
    "prime": 2
  },
  {
    "PSRJ": "J1824-1945",
    "Frequency_Hz": 5.2815237037,
    "prime": 5
  },
  {
    "PSRJ": "J1824-2233",
    "Frequency_Hz": 0.860775494718,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2328",
    "Frequency_Hz": 0.664065940204,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452A",
    "Frequency_Hz": 327.405572743031,
    "prime": [
      3,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452B",
    "Frequency_Hz": 152.7417137620284,
    "prime": [
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452C",
    "Frequency_Hz": 240.44241404183697,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452D",
    "Frequency_Hz": 12.526305241006114,
    "prime": 13
  },
  {
    "PSRJ": "J1824-2452E",
    "Frequency_Hz": 184.50184501845018,
    "prime": [
      5,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452F",
    "Frequency_Hz": 407.99673602611176,
    "prime": [
      2,
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452G",
    "Frequency_Hz": 169.23337282112033,
    "prime": [
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452H",
    "Frequency_Hz": 216.0293799956794,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452I",
    "Frequency_Hz": 254.3330310291929,
    "prime": [
      2,
      127
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452J",
    "Frequency_Hz": 247.5860361475613,
    "prime": [
      2,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452K",
    "Frequency_Hz": 224.16498542927596,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452L",
    "Frequency_Hz": 243.90243902439022,
    "prime": [
      2,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452M",
    "Frequency_Hz": 209.01767906222,
    "prime": [
      11,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2452N",
    "Frequency_Hz": 298.251728579395,
    "prime": [
      2,
      149
    ],
    "derived": true
  },
  {
    "PSRJ": "J1824-2537",
    "Frequency_Hz": 4.477873918947058,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825+0004",
    "Frequency_Hz": 1.28377920873,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825-0319",
    "Frequency_Hz": 219.6099414842233,
    "prime": [
      2,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825-0935",
    "Frequency_Hz": 1.30034086528,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825-1108",
    "Frequency_Hz": 0.5192453693830495,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825-1446",
    "Frequency_Hz": 3.581580930862,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825-31",
    "Frequency_Hz": 0.41981528127623846,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1825-33",
    "Frequency_Hz": 0.7866582756450597,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1826-0049",
    "Frequency_Hz": 217.8248734478,
    "prime": [
      2,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J1826-1131",
    "Frequency_Hz": 0.4777510029497,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1826-1256",
    "Frequency_Hz": 9.0712294903,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1826-1334",
    "Frequency_Hz": 9.85026132,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1826-1419",
    "Frequency_Hz": 1.2976561444784416,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1826-1526",
    "Frequency_Hz": 2.61730216935,
    "prime": 3
  },
  {
    "PSRJ": "J1826-2415",
    "Frequency_Hz": 212.95820294705848,
    "prime": [
      3,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1827-0750",
    "Frequency_Hz": 3.696818455398,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1827-0849",
    "Frequency_Hz": 445.93689247847,
    "prime": [
      2,
      223
    ],
    "derived": true
  },
  {
    "PSRJ": "J1827-0934",
    "Frequency_Hz": 1.95103747456,
    "prime": 2
  },
  {
    "PSRJ": "J1827-0958",
    "Frequency_Hz": 4.0690581317,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1827-1446",
    "Frequency_Hz": 2.00325886,
    "prime": 2
  },
  {
    "PSRJ": "J1828+0625",
    "Frequency_Hz": 275.667196397883,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828+1221",
    "Frequency_Hz": 0.65432390165,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828+1359",
    "Frequency_Hz": 1.3483639591925736,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-0003",
    "Frequency_Hz": 0.262666,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-0038g",
    "Frequency_Hz": 0.4122011541632316,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-0611",
    "Frequency_Hz": 3.7117366843888,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-1007",
    "Frequency_Hz": 6.52754385205,
    "prime": 7
  },
  {
    "PSRJ": "J1828-1057",
    "Frequency_Hz": 4.05954117419,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-1101",
    "Frequency_Hz": 13.87699831012,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-1336",
    "Frequency_Hz": 1.1623418229,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1828-2119",
    "Frequency_Hz": 1.94354745058,
    "prime": 2
  },
  {
    "PSRJ": "J1829+0000",
    "Frequency_Hz": 5.0214063292,
    "prime": 5
  },
  {
    "PSRJ": "J1829+2456",
    "Frequency_Hz": 24.3842965130456,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1829+25",
    "Frequency_Hz": 0.35001750087504374,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1829-0734",
    "Frequency_Hz": 3.140664378483,
    "prime": 3
  },
  {
    "PSRJ": "J1829-1011",
    "Frequency_Hz": 1.2060310902022924,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1829-1751",
    "Frequency_Hz": 3.2558702476,
    "prime": 3
  },
  {
    "PSRJ": "J1830-0052",
    "Frequency_Hz": 2.8926979664,
    "prime": 3
  },
  {
    "PSRJ": "J1830-0131",
    "Frequency_Hz": 2.185604502,
    "prime": 2
  },
  {
    "PSRJ": "J1830-09",
    "Frequency_Hz": 1.4378345751191641,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1830-10",
    "Frequency_Hz": 4.0773057163826145,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1830-1059",
    "Frequency_Hz": 2.46856295596,
    "prime": 2
  },
  {
    "PSRJ": "J1830-1135",
    "Frequency_Hz": 0.16073158159,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1830-1313",
    "Frequency_Hz": 1.3383518526329983,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1830-14",
    "Frequency_Hz": 2.5009484847128274,
    "prime": 3
  },
  {
    "PSRJ": "J1830-1414",
    "Frequency_Hz": 1.29618884641,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1831-04",
    "Frequency_Hz": 0.9384578135059095,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1831-0823",
    "Frequency_Hz": 1.6336314252829,
    "prime": 2
  },
  {
    "PSRJ": "J1831-0941",
    "Frequency_Hz": 3.323676354018401,
    "prime": 3
  },
  {
    "PSRJ": "J1831-0952",
    "Frequency_Hz": 14.8661645038,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1831-1223",
    "Frequency_Hz": 0.34990225465,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1831-1329",
    "Frequency_Hz": 0.46174887333,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1831-1423",
    "Frequency_Hz": 1.96871632878,
    "prime": 2
  },
  {
    "PSRJ": "J1832+0029",
    "Frequency_Hz": 1.87294771837,
    "prime": 2
  },
  {
    "PSRJ": "J1832+27",
    "Frequency_Hz": 1.5827793605571383,
    "prime": 2
  },
  {
    "PSRJ": "J1832-0644",
    "Frequency_Hz": 1.34350681917,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1832-0827",
    "Frequency_Hz": 1.54476489157,
    "prime": 2
  },
  {
    "PSRJ": "J1832-0836",
    "Frequency_Hz": 367.7671211299739,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1832-1021",
    "Frequency_Hz": 3.02705500539,
    "prime": 3
  },
  {
    "PSRJ": "J1832-28",
    "Frequency_Hz": 5.017561465127947,
    "prime": 5
  },
  {
    "PSRJ": "J1833-0209",
    "Frequency_Hz": 3.425471292714461,
    "prime": 3
  },
  {
    "PSRJ": "J1833-0338",
    "Frequency_Hz": 1.456156651265,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-05",
    "Frequency_Hz": 1.342492713620797,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-0556",
    "Frequency_Hz": 0.65722662717,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-0559",
    "Frequency_Hz": 2.0684282391,
    "prime": 2
  },
  {
    "PSRJ": "J1833-0827",
    "Frequency_Hz": 11.7245221768,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-0831",
    "Frequency_Hz": 0.132180571,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-1034",
    "Frequency_Hz": 16.15935711336,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-1055",
    "Frequency_Hz": 1.57818245286,
    "prime": 2
  },
  {
    "PSRJ": "J1833-3840",
    "Frequency_Hz": 535.88637724325,
    "prime": [
      2,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1833-6023",
    "Frequency_Hz": 0.5292586064929428,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1834+10",
    "Frequency_Hz": 0.852719193600513,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1834-0010",
    "Frequency_Hz": 1.91955413102,
    "prime": 2
  },
  {
    "PSRJ": "J1834-0031",
    "Frequency_Hz": 3.03460736808,
    "prime": 3
  },
  {
    "PSRJ": "J1834-0426",
    "Frequency_Hz": 3.446989090579,
    "prime": 3
  },
  {
    "PSRJ": "J1834-0602",
    "Frequency_Hz": 2.04954323268,
    "prime": 2
  },
  {
    "PSRJ": "J1834-0633",
    "Frequency_Hz": 3.1514437369,
    "prime": 3
  },
  {
    "PSRJ": "J1834-0731",
    "Frequency_Hz": 1.94933571114,
    "prime": 2
  },
  {
    "PSRJ": "J1834-0742",
    "Frequency_Hz": 1.268433632689,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1834-0812",
    "Frequency_Hz": 2.0360728738440903,
    "prime": 2
  },
  {
    "PSRJ": "J1834-0845",
    "Frequency_Hz": 0.4028519014086039,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1834-09",
    "Frequency_Hz": 1.9518772472206731,
    "prime": 2
  },
  {
    "PSRJ": "J1834-1202",
    "Frequency_Hz": 1.6386490568062,
    "prime": 2
  },
  {
    "PSRJ": "J1834-1710",
    "Frequency_Hz": 2.790910178543609,
    "prime": 3
  },
  {
    "PSRJ": "J1834-1855",
    "Frequency_Hz": 0.68228844696,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0114",
    "Frequency_Hz": 195.45039772855947,
    "prime": [
      3,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0349",
    "Frequency_Hz": 1.18783958454,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0522",
    "Frequency_Hz": 0.91932957584,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0600",
    "Frequency_Hz": 0.4500881198026485,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0643",
    "Frequency_Hz": 3.26978936174,
    "prime": 3
  },
  {
    "PSRJ": "J1835-0847",
    "Frequency_Hz": 1.1813430939470246,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-09",
    "Frequency_Hz": 1.3325125056298655,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0924",
    "Frequency_Hz": 1.1638841598,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-09242",
    "Frequency_Hz": 4.250816449507783,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-0928",
    "Frequency_Hz": 1.608404895470565,
    "prime": 2
  },
  {
    "PSRJ": "J1835-0944",
    "Frequency_Hz": 6.88006896072,
    "prime": 7
  },
  {
    "PSRJ": "J1835-0946",
    "Frequency_Hz": 2.6347954362,
    "prime": 3
  },
  {
    "PSRJ": "J1835-1020",
    "Frequency_Hz": 3.306308048549,
    "prime": 3
  },
  {
    "PSRJ": "J1835-1106",
    "Frequency_Hz": 6.026830316,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-1548",
    "Frequency_Hz": 1.4914562027,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1835-3259A",
    "Frequency_Hz": 257.1355104139882,
    "prime": 257
  },
  {
    "PSRJ": "J1835-3259B",
    "Frequency_Hz": 546.36058616286,
    "prime": [
      2,
      3,
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1836+0915",
    "Frequency_Hz": 1.847821569887,
    "prime": 2
  },
  {
    "PSRJ": "J1836+51",
    "Frequency_Hz": 1.4450867052023122,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1836+5925",
    "Frequency_Hz": 5.771544847,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1836-0436",
    "Frequency_Hz": 2.822961401283,
    "prime": 3
  },
  {
    "PSRJ": "J1836-0517",
    "Frequency_Hz": 2.18701119405,
    "prime": 2
  },
  {
    "PSRJ": "J1836-1008",
    "Frequency_Hz": 1.777078137137,
    "prime": 2
  },
  {
    "PSRJ": "J1836-11",
    "Frequency_Hz": 2.0153444294166927,
    "prime": 2
  },
  {
    "PSRJ": "J1836-1324",
    "Frequency_Hz": 5.59420680765,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1836-2354A",
    "Frequency_Hz": 298.12158808296846,
    "prime": [
      2,
      149
    ],
    "derived": true
  },
  {
    "PSRJ": "J1836-2354B",
    "Frequency_Hz": 309.3797151920961,
    "prime": [
      3,
      103
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837+0033g",
    "Frequency_Hz": 2.3915935774809114,
    "prime": 2
  },
  {
    "PSRJ": "J1837+0053",
    "Frequency_Hz": 2.11187653357,
    "prime": 2
  },
  {
    "PSRJ": "J1837+10",
    "Frequency_Hz": 0.5858230814294083,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837+1221",
    "Frequency_Hz": 0.5092852475722,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-0045",
    "Frequency_Hz": 1.6206459261456,
    "prime": 2
  },
  {
    "PSRJ": "J1837-0219",
    "Frequency_Hz": 3.67175524116,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-0559",
    "Frequency_Hz": 4.973519846393,
    "prime": 5
  },
  {
    "PSRJ": "J1837-0604",
    "Frequency_Hz": 10.381640429,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-0653",
    "Frequency_Hz": 0.524711443602,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-0822",
    "Frequency_Hz": 0.9097558916507346,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-10",
    "Frequency_Hz": 0.983666222377423,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-1243",
    "Frequency_Hz": 0.53304377703,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1837-1837",
    "Frequency_Hz": 1.617177115611,
    "prime": 2
  },
  {
    "PSRJ": "J1838+0022g",
    "Frequency_Hz": 196.46365422396858,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838+0027g",
    "Frequency_Hz": 18.474043968224645,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838+0044g",
    "Frequency_Hz": 0.45389143824580036,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838+1523",
    "Frequency_Hz": 1.820960929021,
    "prime": 2
  },
  {
    "PSRJ": "J1838+1650",
    "Frequency_Hz": 0.5257713672499236,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838+50",
    "Frequency_Hz": 0.3880144792041801,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838-01",
    "Frequency_Hz": 5.4556921418392665,
    "prime": 5
  },
  {
    "PSRJ": "J1838-0107",
    "Frequency_Hz": 2.2500947731187506,
    "prime": 2
  },
  {
    "PSRJ": "J1838-0453",
    "Frequency_Hz": 2.6255980205,
    "prime": 3
  },
  {
    "PSRJ": "J1838-0537",
    "Frequency_Hz": 6.86085228094,
    "prime": 7
  },
  {
    "PSRJ": "J1838-0549",
    "Frequency_Hz": 4.249688210732,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838-0624",
    "Frequency_Hz": 1.07854185366,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838-0655",
    "Frequency_Hz": 14.18475048010476,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838-1046",
    "Frequency_Hz": 0.82077978267,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1838-1849",
    "Frequency_Hz": 2.0481646020793893,
    "prime": 2
  },
  {
    "PSRJ": "J1839+0543",
    "Frequency_Hz": 17.26282301,
    "prime": 17
  },
  {
    "PSRJ": "J1839-0141",
    "Frequency_Hz": 1.071506354263762,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1839-0223",
    "Frequency_Hz": 0.7893967444685769,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1839-0321",
    "Frequency_Hz": 4.187917144798,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1839-0332",
    "Frequency_Hz": 0.37373645341373557,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1839-0402",
    "Frequency_Hz": 1.91960804535,
    "prime": 2
  },
  {
    "PSRJ": "J1839-0436",
    "Frequency_Hz": 6.690724023,
    "prime": 7
  },
  {
    "PSRJ": "J1839-0459",
    "Frequency_Hz": 1.70846997172,
    "prime": 2
  },
  {
    "PSRJ": "J1839-0627",
    "Frequency_Hz": 2.06222270715,
    "prime": 2
  },
  {
    "PSRJ": "J1839-0643",
    "Frequency_Hz": 2.22445582378,
    "prime": 2
  },
  {
    "PSRJ": "J1839-0905",
    "Frequency_Hz": 2.38677780294,
    "prime": 2
  },
  {
    "PSRJ": "J1839-1238",
    "Frequency_Hz": 0.5231683062382,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840+0012g",
    "Frequency_Hz": 187.26591760299624,
    "prime": [
      11,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840+0214",
    "Frequency_Hz": 1.2539529687,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840+2843",
    "Frequency_Hz": 1.457509613559,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840+5640",
    "Frequency_Hz": 0.6050112405059,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0245g",
    "Frequency_Hz": 0.6657789613848203,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0445",
    "Frequency_Hz": 2.3678933310063495,
    "prime": 2
  },
  {
    "PSRJ": "J1840-0559",
    "Frequency_Hz": 1.16364520997,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0626",
    "Frequency_Hz": 0.5281636115937703,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0643",
    "Frequency_Hz": 28.107357409599,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0753",
    "Frequency_Hz": 2.2837880647352526,
    "prime": 2
  },
  {
    "PSRJ": "J1840-0809",
    "Frequency_Hz": 1.0463823251756,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0815",
    "Frequency_Hz": 0.912041347763,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-0840",
    "Frequency_Hz": 0.18834602617,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-09",
    "Frequency_Hz": 323.71881964608076,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-1122",
    "Frequency_Hz": 1.06274260538,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-1207",
    "Frequency_Hz": 1.325432997714,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1840-1419",
    "Frequency_Hz": 0.151571128974,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841+0130",
    "Frequency_Hz": 33.5877320407,
    "prime": [
      2,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841+0912",
    "Frequency_Hz": 2.622466916938,
    "prime": 3
  },
  {
    "PSRJ": "J1841-0157",
    "Frequency_Hz": 1.5075398485581,
    "prime": 2
  },
  {
    "PSRJ": "J1841-0310",
    "Frequency_Hz": 0.60326130609,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841-0345",
    "Frequency_Hz": 4.89941319293,
    "prime": 5
  },
  {
    "PSRJ": "J1841-0425",
    "Frequency_Hz": 5.37204477631,
    "prime": 5
  },
  {
    "PSRJ": "J1841-0456",
    "Frequency_Hz": 0.084824992,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841-05",
    "Frequency_Hz": 0.9186870125217039,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841-0500",
    "Frequency_Hz": 1.09539127017,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841-0524",
    "Frequency_Hz": 2.2431095533,
    "prime": 2
  },
  {
    "PSRJ": "J1841-1404",
    "Frequency_Hz": 0.7493121892,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1841-7845",
    "Frequency_Hz": 2.8280340409292357,
    "prime": 3
  },
  {
    "PSRJ": "J1842+0114g",
    "Frequency_Hz": 0.24154589371980678,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842+0257",
    "Frequency_Hz": 0.323807374468,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842+0358",
    "Frequency_Hz": 4.28584518744,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842+0638",
    "Frequency_Hz": 3.1947207772,
    "prime": 3
  },
  {
    "PSRJ": "J1842+1332",
    "Frequency_Hz": 2.12042426647,
    "prime": 2
  },
  {
    "PSRJ": "J1842-0153",
    "Frequency_Hz": 0.94856118648,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842-0309",
    "Frequency_Hz": 2.46962580232,
    "prime": 2
  },
  {
    "PSRJ": "J1842-0359",
    "Frequency_Hz": 0.543494571546,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842-0415",
    "Frequency_Hz": 1.89867802835,
    "prime": 2
  },
  {
    "PSRJ": "J1842-06",
    "Frequency_Hz": 2.771798392689548,
    "prime": 3
  },
  {
    "PSRJ": "J1842-0612",
    "Frequency_Hz": 1.7715564495,
    "prime": 2
  },
  {
    "PSRJ": "J1842-0800",
    "Frequency_Hz": 0.7965153572764861,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842-0905",
    "Frequency_Hz": 2.901497311343,
    "prime": 3
  },
  {
    "PSRJ": "J1842-27",
    "Frequency_Hz": 1.2265890154047314,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1842-39",
    "Frequency_Hz": 2.6737967914438503,
    "prime": 3
  },
  {
    "PSRJ": "J1843+0119",
    "Frequency_Hz": 0.7892670071383625,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843+2024",
    "Frequency_Hz": 0.29355310380037836,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0000",
    "Frequency_Hz": 1.1359305256125,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0050",
    "Frequency_Hz": 1.27779447585,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0051g",
    "Frequency_Hz": 1.7241379310344829,
    "prime": 2
  },
  {
    "PSRJ": "J1843-0137",
    "Frequency_Hz": 1.49282164771,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0211",
    "Frequency_Hz": 0.4932102476765,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0355",
    "Frequency_Hz": 7.557780825655,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0408",
    "Frequency_Hz": 1.27888080581,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0459",
    "Frequency_Hz": 1.3245665582545,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0510",
    "Frequency_Hz": 1.488950877855584,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0702",
    "Frequency_Hz": 5.21880961058,
    "prime": 5
  },
  {
    "PSRJ": "J1843-0744",
    "Frequency_Hz": 2.1035248644610003,
    "prime": 2
  },
  {
    "PSRJ": "J1843-08",
    "Frequency_Hz": 0.4921351924114249,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-0806",
    "Frequency_Hz": 1.864197737742,
    "prime": 2
  },
  {
    "PSRJ": "J1843-1113",
    "Frequency_Hz": 541.809745036152,
    "prime": [
      2,
      271
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-1448",
    "Frequency_Hz": 182.7708875140691,
    "prime": [
      3,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1843-1507",
    "Frequency_Hz": 1.713648107847,
    "prime": 2
  },
  {
    "PSRJ": "J1843-40",
    "Frequency_Hz": 3.0846394210748733,
    "prime": 3
  },
  {
    "PSRJ": "J1844+00",
    "Frequency_Hz": 2.171538513321303,
    "prime": 2
  },
  {
    "PSRJ": "J1844+0028g",
    "Frequency_Hz": 280.1120448179272,
    "prime": [
      2,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844+0115",
    "Frequency_Hz": 238.91757323111,
    "prime": 239
  },
  {
    "PSRJ": "J1844+1454",
    "Frequency_Hz": 2.663364054252,
    "prime": 3
  },
  {
    "PSRJ": "J1844+21",
    "Frequency_Hz": 1.6781339150864238,
    "prime": 2
  },
  {
    "PSRJ": "J1844+41",
    "Frequency_Hz": 1.0920607185759528,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-0030",
    "Frequency_Hz": 1.55981558171,
    "prime": 2
  },
  {
    "PSRJ": "J1844-02",
    "Frequency_Hz": 1.7195860681200266,
    "prime": 2
  },
  {
    "PSRJ": "J1844-0244",
    "Frequency_Hz": 1.96958052943,
    "prime": 2
  },
  {
    "PSRJ": "J1844-0256",
    "Frequency_Hz": 3.6635001813432586,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-03",
    "Frequency_Hz": 0.1434452684578199,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-0302",
    "Frequency_Hz": 0.8342856182793672,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-0310",
    "Frequency_Hz": 1.90458362581,
    "prime": 2
  },
  {
    "PSRJ": "J1844-0346",
    "Frequency_Hz": 8.8609552273,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-0433",
    "Frequency_Hz": 1.0090512530345,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-0452",
    "Frequency_Hz": 3.711355675,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-0502",
    "Frequency_Hz": 2.9836270935,
    "prime": 3
  },
  {
    "PSRJ": "J1844-0538",
    "Frequency_Hz": 3.91076899155,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1844-09",
    "Frequency_Hz": 1.5761797626714606,
    "prime": 2
  },
  {
    "PSRJ": "J1845+0326g",
    "Frequency_Hz": 1.0330578512396695,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845+0417g",
    "Frequency_Hz": 0.5892751915144372,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845+0623",
    "Frequency_Hz": 0.7034059825256,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845+21",
    "Frequency_Hz": 0.2662690382362339,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845-0008g",
    "Frequency_Hz": 0.7886435331230284,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845-0028g",
    "Frequency_Hz": 11.834319526627219,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845-0316",
    "Frequency_Hz": 4.816127010893825,
    "prime": 5
  },
  {
    "PSRJ": "J1845-0434",
    "Frequency_Hz": 2.054398913559,
    "prime": 2
  },
  {
    "PSRJ": "J1845-0545",
    "Frequency_Hz": 0.91545239953,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845-0635",
    "Frequency_Hz": 2.936603821673,
    "prime": 3
  },
  {
    "PSRJ": "J1845-0743",
    "Frequency_Hz": 9.55157450375,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1845-0826",
    "Frequency_Hz": 1.57640600257,
    "prime": 2
  },
  {
    "PSRJ": "J1845-1114",
    "Frequency_Hz": 4.849164619924,
    "prime": 5
  },
  {
    "PSRJ": "J1845-1351",
    "Frequency_Hz": 0.381837011156,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1846+0051",
    "Frequency_Hz": 2.30213431573,
    "prime": 2
  },
  {
    "PSRJ": "J1846+0919",
    "Frequency_Hz": 4.43356543891,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1846-0257",
    "Frequency_Hz": 0.22337770346711627,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1846-0258",
    "Frequency_Hz": 3.0621185502,
    "prime": 3
  },
  {
    "PSRJ": "J1846-05",
    "Frequency_Hz": 0.6920487063879556,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1846-0500",
    "Frequency_Hz": 2.09803725694,
    "prime": 2
  },
  {
    "PSRJ": "J1846-0513",
    "Frequency_Hz": 42.7907451472,
    "prime": 43
  },
  {
    "PSRJ": "J1846-0749",
    "Frequency_Hz": 2.85624866482,
    "prime": 3
  },
  {
    "PSRJ": "J1846-07492",
    "Frequency_Hz": 1.1609282951405588,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1846-4249",
    "Frequency_Hz": 0.43994720633523976,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1846-7403",
    "Frequency_Hz": 0.20496681631301508,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847+01",
    "Frequency_Hz": 288.7610364107165,
    "prime": [
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847+0110g",
    "Frequency_Hz": 153.1393568147014,
    "prime": [
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847+0133g",
    "Frequency_Hz": 0.35125803063672545,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847+0614g",
    "Frequency_Hz": 0.6013156787050066,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847-0130",
    "Frequency_Hz": 0.149096940909,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847-0402",
    "Frequency_Hz": 1.67275327872,
    "prime": 2
  },
  {
    "PSRJ": "J1847-0427",
    "Frequency_Hz": 3.857330567103543,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847-0438",
    "Frequency_Hz": 1.043842621224,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847-0443",
    "Frequency_Hz": 2.93399568493,
    "prime": 3
  },
  {
    "PSRJ": "J1847-05",
    "Frequency_Hz": 0.3819607573517897,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1847-0605",
    "Frequency_Hz": 1.285070462943,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848+0127g",
    "Frequency_Hz": 1.8725890416089284,
    "prime": 2
  },
  {
    "PSRJ": "J1848+0150g",
    "Frequency_Hz": 0.3039375104478519,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848+0351",
    "Frequency_Hz": 5.223496067956352,
    "prime": 5
  },
  {
    "PSRJ": "J1848+0604",
    "Frequency_Hz": 0.4507336397195,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848+0647",
    "Frequency_Hz": 1.9764535635572482,
    "prime": 2
  },
  {
    "PSRJ": "J1848+0826",
    "Frequency_Hz": 3.042614307190163,
    "prime": 3
  },
  {
    "PSRJ": "J1848+12",
    "Frequency_Hz": 1.3249771441442635,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848+1516",
    "Frequency_Hz": 0.44767370896681113,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848+26",
    "Frequency_Hz": 1.589825119236884,
    "prime": 2
  },
  {
    "PSRJ": "J1848-0023",
    "Frequency_Hz": 1.8600336054794,
    "prime": 2
  },
  {
    "PSRJ": "J1848-0055",
    "Frequency_Hz": 3.6422351217,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848-0123",
    "Frequency_Hz": 1.51644671422,
    "prime": 2
  },
  {
    "PSRJ": "J1848-0129A",
    "Frequency_Hz": 50.54589567327133,
    "prime": [
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848-0511",
    "Frequency_Hz": 0.61082541181,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848-0601",
    "Frequency_Hz": 4.44435604316,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848-1150",
    "Frequency_Hz": 0.762068243394,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1848-1243",
    "Frequency_Hz": 2.41322434741119,
    "prime": 2
  },
  {
    "PSRJ": "J1848-1414",
    "Frequency_Hz": 3.35830177748,
    "prime": 3
  },
  {
    "PSRJ": "J1848-1952",
    "Frequency_Hz": 0.2321160610787,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0001g",
    "Frequency_Hz": 1.9024048803175455,
    "prime": 2
  },
  {
    "PSRJ": "J1849+0009g",
    "Frequency_Hz": 0.75847754347749,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0016g",
    "Frequency_Hz": 552.4861878453039,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0037g",
    "Frequency_Hz": 2.5221317057176726,
    "prime": 3
  },
  {
    "PSRJ": "J1849+0106",
    "Frequency_Hz": 0.5457742743485527,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0127",
    "Frequency_Hz": 1.844489329,
    "prime": 2
  },
  {
    "PSRJ": "J1849+0225g",
    "Frequency_Hz": 0.6781867997721293,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0339g",
    "Frequency_Hz": 0.5999808006143803,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0409",
    "Frequency_Hz": 1.313725400789,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+0430",
    "Frequency_Hz": 2.3745873337530834,
    "prime": 2
  },
  {
    "PSRJ": "J1849+0619g",
    "Frequency_Hz": 0.49726504226752855,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+1001",
    "Frequency_Hz": 28.4177228288,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+2423",
    "Frequency_Hz": 3.6279073142239358,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849+2559",
    "Frequency_Hz": 1.9258063832778378,
    "prime": 2
  },
  {
    "PSRJ": "J1849-0001",
    "Frequency_Hz": 25.9587970473691,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849-0014g",
    "Frequency_Hz": 2.0335365570000894,
    "prime": 2
  },
  {
    "PSRJ": "J1849-0019g",
    "Frequency_Hz": 1.0972491962649638,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849-0040",
    "Frequency_Hz": 1.487031729,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849-0317",
    "Frequency_Hz": 1.496059848301,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849-0614",
    "Frequency_Hz": 1.04885922814,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1849-0636",
    "Frequency_Hz": 0.6890079310895,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850+0011g",
    "Frequency_Hz": 5.968723886832995,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850+0026",
    "Frequency_Hz": 0.9243476491536,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850+0124",
    "Frequency_Hz": 280.91751733,
    "prime": 281
  },
  {
    "PSRJ": "J1850+0242",
    "Frequency_Hz": 223.221059721,
    "prime": 223
  },
  {
    "PSRJ": "J1850+0423",
    "Frequency_Hz": 3.439780586587488,
    "prime": 3
  },
  {
    "PSRJ": "J1850+1335",
    "Frequency_Hz": 2.8936595854908,
    "prime": 3
  },
  {
    "PSRJ": "J1850+15",
    "Frequency_Hz": 0.7225616254746328,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850-0002g",
    "Frequency_Hz": 1.1193753221527756,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850-0006",
    "Frequency_Hz": 0.456308887620196,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850-0020g",
    "Frequency_Hz": 0.6350265436271034,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850-0026",
    "Frequency_Hz": 6.001178958575711,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1850-0031",
    "Frequency_Hz": 1.36205478318,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+00",
    "Frequency_Hz": 43.770068302753884,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+0051g",
    "Frequency_Hz": 0.24832381425378694,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+0056g",
    "Frequency_Hz": 3.435245620061834,
    "prime": 3
  },
  {
    "PSRJ": "J1851+0118",
    "Frequency_Hz": 1.10256396094,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+0233",
    "Frequency_Hz": 2.9068220372528795,
    "prime": 3
  },
  {
    "PSRJ": "J1851+0241",
    "Frequency_Hz": 0.22265177396859315,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+0418",
    "Frequency_Hz": 3.512489300016,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+10",
    "Frequency_Hz": 1.1522575231037715,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851+1259",
    "Frequency_Hz": 0.829660251014,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851-0029",
    "Frequency_Hz": 1.927809038235,
    "prime": 2
  },
  {
    "PSRJ": "J1851-0053",
    "Frequency_Hz": 0.7096900833039,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851-0114",
    "Frequency_Hz": 1.0491179337,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1851-0241",
    "Frequency_Hz": 2.2978265794,
    "prime": 2
  },
  {
    "PSRJ": "J1851-0633",
    "Frequency_Hz": 0.52075138808,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0008",
    "Frequency_Hz": 2.13723569512,
    "prime": 2
  },
  {
    "PSRJ": "J1852+0013",
    "Frequency_Hz": 1.04411277814,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0018g",
    "Frequency_Hz": 3.137129383962441,
    "prime": 3
  },
  {
    "PSRJ": "J1852+0031",
    "Frequency_Hz": 0.45867453075,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0033",
    "Frequency_Hz": 0.08651481875215548,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0040",
    "Frequency_Hz": 9.531742552845566,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0056g",
    "Frequency_Hz": 0.8490477929002624,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0158g",
    "Frequency_Hz": 5.3841598018629195,
    "prime": 5
  },
  {
    "PSRJ": "J1852+0305",
    "Frequency_Hz": 0.7540633266,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+0309g",
    "Frequency_Hz": 179.2114695340502,
    "prime": 179
  },
  {
    "PSRJ": "J1852+0857g",
    "Frequency_Hz": 0.2651015073671709,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852+1200",
    "Frequency_Hz": 258.687554,
    "prime": [
      7,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0000",
    "Frequency_Hz": 0.5206473640714849,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0002g",
    "Frequency_Hz": 4.079967360261118,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0024g",
    "Frequency_Hz": 2.8135010688537476,
    "prime": 3
  },
  {
    "PSRJ": "J1852-0033g",
    "Frequency_Hz": 0.7304535907954196,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0039g",
    "Frequency_Hz": 1.2454767121593593,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0044g",
    "Frequency_Hz": 414.9377593360996,
    "prime": [
      5,
      83
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0055g",
    "Frequency_Hz": 6.096445772114857,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-0118",
    "Frequency_Hz": 2.214973590106,
    "prime": 2
  },
  {
    "PSRJ": "J1852-0127",
    "Frequency_Hz": 2.33111047141,
    "prime": 2
  },
  {
    "PSRJ": "J1852-0635",
    "Frequency_Hz": 1.907817902338,
    "prime": 2
  },
  {
    "PSRJ": "J1852-0947",
    "Frequency_Hz": 0.331159372546,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-1310",
    "Frequency_Hz": 231.768195441668,
    "prime": [
      2,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1852-2610",
    "Frequency_Hz": 2.9732066401153,
    "prime": 3
  },
  {
    "PSRJ": "J1853+0009",
    "Frequency_Hz": 29.9445468913937,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0011",
    "Frequency_Hz": 2.513260850307,
    "prime": 3
  },
  {
    "PSRJ": "J1853+0013g",
    "Frequency_Hz": 1.0768948311197923,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0023g",
    "Frequency_Hz": 1.7332847708541685,
    "prime": 2
  },
  {
    "PSRJ": "J1853+0029",
    "Frequency_Hz": 0.5328337847941235,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0056",
    "Frequency_Hz": 3.6287419642,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0237g",
    "Frequency_Hz": 2.3397833360630806,
    "prime": 2
  },
  {
    "PSRJ": "J1853+0259",
    "Frequency_Hz": 1.7077876671128183,
    "prime": 2
  },
  {
    "PSRJ": "J1853+0312g",
    "Frequency_Hz": 2.2826359880389875,
    "prime": 2
  },
  {
    "PSRJ": "J1853+0427",
    "Frequency_Hz": 0.7571980156816525,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0505",
    "Frequency_Hz": 1.10480469655,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0545",
    "Frequency_Hz": 7.91137154739,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+0853",
    "Frequency_Hz": 0.25545016232,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853+1303",
    "Frequency_Hz": 244.391377738396,
    "prime": [
      2,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853-0003g",
    "Frequency_Hz": 5.830223880597015,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853-0004",
    "Frequency_Hz": 9.858140751177,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853-0008g",
    "Frequency_Hz": 354.6099290780142,
    "prime": [
      5,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853-0130g",
    "Frequency_Hz": 0.5141388174807198,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853-0649",
    "Frequency_Hz": 0.954078207454711,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1853-0842A",
    "Frequency_Hz": 465.23897161363,
    "prime": [
      3,
      5,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+0012g",
    "Frequency_Hz": 369.00369003690037,
    "prime": [
      3,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+0050",
    "Frequency_Hz": 1.3033059733556447,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+0131g",
    "Frequency_Hz": 0.4892726961371921,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+0306",
    "Frequency_Hz": 0.21940313107876544,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+0317",
    "Frequency_Hz": 0.7318235268473215,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+0319",
    "Frequency_Hz": 1.5909865563800745,
    "prime": 2
  },
  {
    "PSRJ": "J1854+0704g",
    "Frequency_Hz": 2.217786648924373,
    "prime": 2
  },
  {
    "PSRJ": "J1854+1050",
    "Frequency_Hz": 1.74460092962,
    "prime": 2
  },
  {
    "PSRJ": "J1854+36",
    "Frequency_Hz": 0.7691006137422898,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854+40",
    "Frequency_Hz": 0.5720823798627003,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854-0033g",
    "Frequency_Hz": 2.7664813124187346,
    "prime": 3
  },
  {
    "PSRJ": "J1854-0036",
    "Frequency_Hz": 1.394980657055,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854-05",
    "Frequency_Hz": 0.7812835707784318,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854-0514",
    "Frequency_Hz": 0.781281237119,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854-0524",
    "Frequency_Hz": 1.8381649781912779,
    "prime": 2
  },
  {
    "PSRJ": "J1854-1421",
    "Frequency_Hz": 0.872147648765,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1854-1557",
    "Frequency_Hz": 0.28959308043267945,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0139g",
    "Frequency_Hz": 2.251542306479939,
    "prime": 2
  },
  {
    "PSRJ": "J1855+0205",
    "Frequency_Hz": 4.051588553357142,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0228g",
    "Frequency_Hz": 3.949915076825848,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0235g",
    "Frequency_Hz": 1.0172631236301555,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0240g",
    "Frequency_Hz": 0.8169934640522876,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0306",
    "Frequency_Hz": 0.6121578118391787,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0307",
    "Frequency_Hz": 1.1829305875744,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0327g",
    "Frequency_Hz": 1.2774328709026341,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0339g",
    "Frequency_Hz": 0.5677495543165999,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0422",
    "Frequency_Hz": 0.59590979571,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0424g",
    "Frequency_Hz": 0.4503997297601621,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0455g",
    "Frequency_Hz": 9.9000099000099,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0511g",
    "Frequency_Hz": 0.7034970840045868,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0527",
    "Frequency_Hz": 0.7176255015013796,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855+0626",
    "Frequency_Hz": 1.8909593422940854,
    "prime": 2
  },
  {
    "PSRJ": "J1855+0700",
    "Frequency_Hz": 3.86571065372,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1855-0941",
    "Frequency_Hz": 2.895182851468,
    "prime": 3
  },
  {
    "PSRJ": "J1855-1436",
    "Frequency_Hz": 278.23441816295133,
    "prime": [
      2,
      139
    ],
    "derived": true
  },
  {
    "PSRJ": "J1856+0011g",
    "Frequency_Hz": 1.0770407229097332,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1856+0029g",
    "Frequency_Hz": 2.6595744680851063,
    "prime": 3
  },
  {
    "PSRJ": "J1856+0102",
    "Frequency_Hz": 1.61233860788,
    "prime": 2
  },
  {
    "PSRJ": "J1856+0113",
    "Frequency_Hz": 3.7391619008,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1856+0211g",
    "Frequency_Hz": 0.1011112983492628,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1856+0243g",
    "Frequency_Hz": 1.8294914013904136,
    "prime": 2
  },
  {
    "PSRJ": "J1856+0245",
    "Frequency_Hz": 12.359917475530423,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1856+0404",
    "Frequency_Hz": 2.3795237875,
    "prime": 2
  },
  {
    "PSRJ": "J1856+0615g",
    "Frequency_Hz": 3.058384561274735,
    "prime": 3
  },
  {
    "PSRJ": "J1856+0912",
    "Frequency_Hz": 0.4606806110494824,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1856-0526",
    "Frequency_Hz": 2.699169436353,
    "prime": 3
  },
  {
    "PSRJ": "J1856-3754",
    "Frequency_Hz": 0.1417393685,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1857+0057",
    "Frequency_Hz": 2.801677255733,
    "prime": 3
  },
  {
    "PSRJ": "J1857+0143",
    "Frequency_Hz": 7.1551197652,
    "prime": 7
  },
  {
    "PSRJ": "J1857+0210",
    "Frequency_Hz": 1.58482860482,
    "prime": 2
  },
  {
    "PSRJ": "J1857+0212",
    "Frequency_Hz": 2.4046709707022,
    "prime": 2
  },
  {
    "PSRJ": "J1857+0214g",
    "Frequency_Hz": 2.994749704635835,
    "prime": 3
  },
  {
    "PSRJ": "J1857+0224g",
    "Frequency_Hz": 1.1417167155142836,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1857+0229g",
    "Frequency_Hz": 1.7123287671232879,
    "prime": 2
  },
  {
    "PSRJ": "J1857+0300",
    "Frequency_Hz": 1.294200098793096,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1857+0526",
    "Frequency_Hz": 2.8575414635864003,
    "prime": 3
  },
  {
    "PSRJ": "J1857+0809",
    "Frequency_Hz": 1.98837251247,
    "prime": 2
  },
  {
    "PSRJ": "J1857+0943",
    "Frequency_Hz": 186.494078377989,
    "prime": [
      2,
      3,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1857-1027",
    "Frequency_Hz": 0.2712071040704176,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0026g",
    "Frequency_Hz": 0.21210392243783766,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0215",
    "Frequency_Hz": 1.3407916532,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0239",
    "Frequency_Hz": 5.05959729395391,
    "prime": 5
  },
  {
    "PSRJ": "J1858+0241",
    "Frequency_Hz": 0.21307273988,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0244g",
    "Frequency_Hz": 383.1417624521073,
    "prime": 383
  },
  {
    "PSRJ": "J1858+0310g",
    "Frequency_Hz": 2.682763246143528,
    "prime": 3
  },
  {
    "PSRJ": "J1858+0319",
    "Frequency_Hz": 1.1528123314116618,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0346",
    "Frequency_Hz": 3.8934169638570397,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0453g",
    "Frequency_Hz": 0.2658867322520606,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858+0609g",
    "Frequency_Hz": 2.0646226902033655,
    "prime": 2
  },
  {
    "PSRJ": "J1858-0024g",
    "Frequency_Hz": 2.4962556165751373,
    "prime": 2
  },
  {
    "PSRJ": "J1858-0113g",
    "Frequency_Hz": 0.6527415143603134,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1858-0736",
    "Frequency_Hz": 1.8146890663392272,
    "prime": 2
  },
  {
    "PSRJ": "J1858-2216",
    "Frequency_Hz": 419.46081729722476,
    "prime": 419
  },
  {
    "PSRJ": "J1858-5422",
    "Frequency_Hz": 424.5389760704,
    "prime": [
      5,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+00",
    "Frequency_Hz": 1.786874797078031,
    "prime": 2
  },
  {
    "PSRJ": "J1859+0026g",
    "Frequency_Hz": 116.68611435239207,
    "prime": [
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0126g",
    "Frequency_Hz": 1.0441683199331733,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0239Bg",
    "Frequency_Hz": 1.1778563015312131,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0239g",
    "Frequency_Hz": 17.822135091783995,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0251g",
    "Frequency_Hz": 0.27932960893854747,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0313g",
    "Frequency_Hz": 621.1180124223602,
    "prime": [
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0345",
    "Frequency_Hz": 0.6615907205449981,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0430g",
    "Frequency_Hz": 2.9733151192386207,
    "prime": 3
  },
  {
    "PSRJ": "J1859+0434g",
    "Frequency_Hz": 2.181786446742593,
    "prime": 2
  },
  {
    "PSRJ": "J1859+0601",
    "Frequency_Hz": 0.95756759282,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+0603",
    "Frequency_Hz": 1.9663321475056033,
    "prime": 2
  },
  {
    "PSRJ": "J1859+0658g",
    "Frequency_Hz": 195.69471624266146,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+1526",
    "Frequency_Hz": 1.0706963883513807,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1859+7654",
    "Frequency_Hz": 0.71749953039,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900+0213g",
    "Frequency_Hz": 31.162355874104083,
    "prime": 31
  },
  {
    "PSRJ": "J1900+0227",
    "Frequency_Hz": 2.67192804814,
    "prime": 3
  },
  {
    "PSRJ": "J1900+0308",
    "Frequency_Hz": 203.6975581461,
    "prime": [
      2,
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900+0405g",
    "Frequency_Hz": 13.815971262779774,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900+0438",
    "Frequency_Hz": 3.2019016072538546,
    "prime": 3
  },
  {
    "PSRJ": "J1900+0634",
    "Frequency_Hz": 2.56494355823,
    "prime": 3
  },
  {
    "PSRJ": "J1900+0715g",
    "Frequency_Hz": 1.030460409711059,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900+0732g",
    "Frequency_Hz": 0.5851375073142188,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900+30",
    "Frequency_Hz": 1.660503431430341,
    "prime": 2
  },
  {
    "PSRJ": "J1900+4221",
    "Frequency_Hz": 0.230354542767,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900-0051",
    "Frequency_Hz": 2.596093134656,
    "prime": 3
  },
  {
    "PSRJ": "J1900-0134",
    "Frequency_Hz": 0.54575260398,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900-0152g",
    "Frequency_Hz": 0.7225433526011561,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900-0933",
    "Frequency_Hz": 0.702301840425,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1900-2600",
    "Frequency_Hz": 1.63342803901,
    "prime": 2
  },
  {
    "PSRJ": "J1900-7951",
    "Frequency_Hz": 0.7817427461944981,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+00",
    "Frequency_Hz": 1.2859057019630638,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0020g",
    "Frequency_Hz": 4.655276756203156,
    "prime": 5
  },
  {
    "PSRJ": "J1901+0124",
    "Frequency_Hz": 3.136574306333,
    "prime": 3
  },
  {
    "PSRJ": "J1901+0156",
    "Frequency_Hz": 3.469560929092,
    "prime": 3
  },
  {
    "PSRJ": "J1901+0234",
    "Frequency_Hz": 1.1296368016721368,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0254",
    "Frequency_Hz": 0.76941220286,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0300",
    "Frequency_Hz": 128.25813729784,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0315g",
    "Frequency_Hz": 1.2197799516967138,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0320",
    "Frequency_Hz": 1.57088341645,
    "prime": 2
  },
  {
    "PSRJ": "J1901+0331",
    "Frequency_Hz": 1.5256547469098,
    "prime": 2
  },
  {
    "PSRJ": "J1901+0355",
    "Frequency_Hz": 1.80259278332,
    "prime": 2
  },
  {
    "PSRJ": "J1901+0413",
    "Frequency_Hz": 0.37550509899,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0435",
    "Frequency_Hz": 1.4480657907,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0459",
    "Frequency_Hz": 1.140193897302543,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0510",
    "Frequency_Hz": 1.6266597983,
    "prime": 2
  },
  {
    "PSRJ": "J1901+0511",
    "Frequency_Hz": 0.21737386764632663,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0621",
    "Frequency_Hz": 1.20192026148,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0658",
    "Frequency_Hz": 13.20239193874,
    "prime": 13
  },
  {
    "PSRJ": "J1901+0712g",
    "Frequency_Hz": 0.9636603675400642,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+0716",
    "Frequency_Hz": 1.552793723757,
    "prime": 2
  },
  {
    "PSRJ": "J1901+13",
    "Frequency_Hz": 1.3496149258449357,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901+1306",
    "Frequency_Hz": 0.5461921671517482,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901-0125",
    "Frequency_Hz": 357.99117399581,
    "prime": [
      2,
      179
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901-0312",
    "Frequency_Hz": 2.811148158994,
    "prime": 3
  },
  {
    "PSRJ": "J1901-0315",
    "Frequency_Hz": 1.24736012308,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901-0906",
    "Frequency_Hz": 0.5611895882533,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1901-1740",
    "Frequency_Hz": 0.5110233902991627,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1902+0235",
    "Frequency_Hz": 2.407351699275827,
    "prime": 2
  },
  {
    "PSRJ": "J1902+0248",
    "Frequency_Hz": 0.81714203597,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1902+0556",
    "Frequency_Hz": 1.339445927984,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1902+0615",
    "Frequency_Hz": 1.4847663170749,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1902+0723",
    "Frequency_Hz": 2.0499674300867214,
    "prime": 2
  },
  {
    "PSRJ": "J1902+0809g",
    "Frequency_Hz": 5.256794406770751,
    "prime": 5
  },
  {
    "PSRJ": "J1902+1141",
    "Frequency_Hz": 2.4441500533272382,
    "prime": 2
  },
  {
    "PSRJ": "J1902-0340",
    "Frequency_Hz": 0.65587872702,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1902-1036",
    "Frequency_Hz": 1.2709491526977525,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1902-5105",
    "Frequency_Hz": 573.92104496683,
    "prime": [
      2,
      7,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0135",
    "Frequency_Hz": 1.3711635767547,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0319g",
    "Frequency_Hz": 0.5393743257820928,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0327",
    "Frequency_Hz": 465.135238339217,
    "prime": [
      3,
      5,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0415",
    "Frequency_Hz": 0.8685089656746143,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0433g",
    "Frequency_Hz": 0.0711748838070022,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0534g",
    "Frequency_Hz": 2.796029637914162,
    "prime": 3
  },
  {
    "PSRJ": "J1903+0601",
    "Frequency_Hz": 2.672874306425,
    "prime": 3
  },
  {
    "PSRJ": "J1903+0654",
    "Frequency_Hz": 1.2638514117641277,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0839g",
    "Frequency_Hz": 216.45021645021646,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0845g",
    "Frequency_Hz": 6.529534776235926,
    "prime": 7
  },
  {
    "PSRJ": "J1903+0851g",
    "Frequency_Hz": 0.8117660731325007,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0912",
    "Frequency_Hz": 6.012705647058798,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903+0925",
    "Frequency_Hz": 2.7999062123,
    "prime": 3
  },
  {
    "PSRJ": "J1903+2225",
    "Frequency_Hz": 1.5356610026793551,
    "prime": 2
  },
  {
    "PSRJ": "J1903-0258",
    "Frequency_Hz": 3.31720316669,
    "prime": 3
  },
  {
    "PSRJ": "J1903-0632",
    "Frequency_Hz": 2.31540809127,
    "prime": 2
  },
  {
    "PSRJ": "J1903-0848",
    "Frequency_Hz": 1.1269832418593597,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1903-7051",
    "Frequency_Hz": 277.94006243351,
    "prime": [
      2,
      139
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0004",
    "Frequency_Hz": 7.1671888360297,
    "prime": 7
  },
  {
    "PSRJ": "J1904+0056",
    "Frequency_Hz": 2.2826388174606977,
    "prime": 2
  },
  {
    "PSRJ": "J1904+0207g",
    "Frequency_Hz": 198.4126984126984,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0358g",
    "Frequency_Hz": 1.330601165606621,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0412",
    "Frequency_Hz": 14.065707059751212,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0415g",
    "Frequency_Hz": 4.320587599913589,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0451",
    "Frequency_Hz": 164.1397912192,
    "prime": [
      2,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0519g",
    "Frequency_Hz": 0.5950503710139063,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0535g",
    "Frequency_Hz": 1.6562872664634956,
    "prime": 2
  },
  {
    "PSRJ": "J1904+0553g",
    "Frequency_Hz": 203.66598778004072,
    "prime": [
      2,
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0603g",
    "Frequency_Hz": 0.5063470604021408,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0621g",
    "Frequency_Hz": 0.8116883116883117,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0738",
    "Frequency_Hz": 4.785639252319,
    "prime": 5
  },
  {
    "PSRJ": "J1904+0800",
    "Frequency_Hz": 3.797142580957,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0823g",
    "Frequency_Hz": 0.6632487249043264,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0836g",
    "Frequency_Hz": 225.22522522522522,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+0852g",
    "Frequency_Hz": 161.35721717754816,
    "prime": [
      7,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+1011",
    "Frequency_Hz": 0.538627704166,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904+33",
    "Frequency_Hz": 2.3980815347721824,
    "prime": 2
  },
  {
    "PSRJ": "J1904-0150",
    "Frequency_Hz": 2.63582983361,
    "prime": 3
  },
  {
    "PSRJ": "J1904-11",
    "Frequency_Hz": 381.6793893129771,
    "prime": [
      2,
      191
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904-1224",
    "Frequency_Hz": 1.3318972453758,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1904-1629",
    "Frequency_Hz": 0.6487557974801877,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0154A",
    "Frequency_Hz": 313.19089716169555,
    "prime": 313
  },
  {
    "PSRJ": "J1905+0156g",
    "Frequency_Hz": 0.9216589861751152,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0400",
    "Frequency_Hz": 264.242346143483,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0450g",
    "Frequency_Hz": 1.276650070215754,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0558g",
    "Frequency_Hz": 1.1820330969267139,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0600",
    "Frequency_Hz": 2.266492130584,
    "prime": 2
  },
  {
    "PSRJ": "J1905+0616",
    "Frequency_Hz": 1.010308367171,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0656g",
    "Frequency_Hz": 0.3981268059077526,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0709",
    "Frequency_Hz": 1.543104306964,
    "prime": 2
  },
  {
    "PSRJ": "J1905+0758g",
    "Frequency_Hz": 0.838469928368978,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0902",
    "Frequency_Hz": 4.581810713509471,
    "prime": 5
  },
  {
    "PSRJ": "J1905+0920g",
    "Frequency_Hz": 5.866134803777791,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+0936g",
    "Frequency_Hz": 0.6118088461394754,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905+1034",
    "Frequency_Hz": 0.5791024386588766,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1905-0056",
    "Frequency_Hz": 1.5547654688133,
    "prime": 2
  },
  {
    "PSRJ": "J1906+0055",
    "Frequency_Hz": 358.4804470811058,
    "prime": [
      2,
      179
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0335g",
    "Frequency_Hz": 0.7716049382716049,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0414",
    "Frequency_Hz": 0.958440460657,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0454",
    "Frequency_Hz": 480.01267196822,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0509",
    "Frequency_Hz": 2.5151558067451005,
    "prime": 3
  },
  {
    "PSRJ": "J1906+0641",
    "Frequency_Hz": 3.7414393324491,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0646g",
    "Frequency_Hz": 2.812781278127813,
    "prime": 3
  },
  {
    "PSRJ": "J1906+0649",
    "Frequency_Hz": 0.77726386327,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0722",
    "Frequency_Hz": 8.9666688432,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0724",
    "Frequency_Hz": 0.6508339855418802,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+0746",
    "Frequency_Hz": 6.940918295,
    "prime": 7
  },
  {
    "PSRJ": "J1906+0757g",
    "Frequency_Hz": 17.48586278864193,
    "prime": 17
  },
  {
    "PSRJ": "J1906+0822g",
    "Frequency_Hz": 2.307124400147656,
    "prime": 2
  },
  {
    "PSRJ": "J1906+0912",
    "Frequency_Hz": 1.289748954997,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906+1854",
    "Frequency_Hz": 0.981264712837788,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1906-1754",
    "Frequency_Hz": 347.66288115516,
    "prime": [
      2,
      3,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0249",
    "Frequency_Hz": 2.84188243708,
    "prime": 3
  },
  {
    "PSRJ": "J1907+0255",
    "Frequency_Hz": 1.6161338344879799,
    "prime": 2
  },
  {
    "PSRJ": "J1907+0345",
    "Frequency_Hz": 4.16400754519,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0534",
    "Frequency_Hz": 0.8784237673,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0555g",
    "Frequency_Hz": 0.31655587211142766,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0602",
    "Frequency_Hz": 9.3779822336,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0631",
    "Frequency_Hz": 3.0897763135609613,
    "prime": 3
  },
  {
    "PSRJ": "J1907+0658g",
    "Frequency_Hz": 4.580012824035907,
    "prime": 5
  },
  {
    "PSRJ": "J1907+0709g",
    "Frequency_Hz": 2.906131938390003,
    "prime": 3
  },
  {
    "PSRJ": "J1907+0731",
    "Frequency_Hz": 2.749622437569,
    "prime": 3
  },
  {
    "PSRJ": "J1907+0740",
    "Frequency_Hz": 1.740043054805,
    "prime": 2
  },
  {
    "PSRJ": "J1907+0833",
    "Frequency_Hz": 5.9656054404024434,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0859",
    "Frequency_Hz": 0.6548607193761028,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0918",
    "Frequency_Hz": 4.422682683680122,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+0919",
    "Frequency_Hz": 0.19236888040926864,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+1149",
    "Frequency_Hz": 0.70414584243,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+1247",
    "Frequency_Hz": 1.2090474901240007,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+4002",
    "Frequency_Hz": 0.8092202865133,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907+57",
    "Frequency_Hz": 2.358490566037736,
    "prime": 2
  },
  {
    "PSRJ": "J1907-1018",
    "Frequency_Hz": 0.566323304509,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1907-1532",
    "Frequency_Hz": 1.5816895297814866,
    "prime": 2
  },
  {
    "PSRJ": "J1908+0128",
    "Frequency_Hz": 212.66079094525,
    "prime": [
      3,
      71
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+0457",
    "Frequency_Hz": 1.1809263676323203,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+0500",
    "Frequency_Hz": 3.436155481471,
    "prime": 3
  },
  {
    "PSRJ": "J1908+0558",
    "Frequency_Hz": 5.928470913410199,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+0734",
    "Frequency_Hz": 4.7091485433,
    "prime": 5
  },
  {
    "PSRJ": "J1908+0811g",
    "Frequency_Hz": 5.505395287381634,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+0833",
    "Frequency_Hz": 1.9527027166187971,
    "prime": 2
  },
  {
    "PSRJ": "J1908+0839",
    "Frequency_Hz": 5.3938234402,
    "prime": 5
  },
  {
    "PSRJ": "J1908+0909",
    "Frequency_Hz": 2.97107636748,
    "prime": 3
  },
  {
    "PSRJ": "J1908+0911g",
    "Frequency_Hz": 0.1935733643050716,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+0916",
    "Frequency_Hz": 1.20442744835,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+0949g",
    "Frequency_Hz": 110.49723756906076,
    "prime": [
      2,
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+1035g",
    "Frequency_Hz": 93.54536950420955,
    "prime": [
      2,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+1351",
    "Frequency_Hz": 0.31497731340150303,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+2105",
    "Frequency_Hz": 389.95587978827,
    "prime": [
      2,
      3,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1908+2351",
    "Frequency_Hz": 2.648459391172155,
    "prime": 3
  },
  {
    "PSRJ": "J1909+0007",
    "Frequency_Hz": 0.9833291670772,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0254",
    "Frequency_Hz": 1.0102685320583,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0616",
    "Frequency_Hz": 1.322763989,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0641",
    "Frequency_Hz": 1.3481414039832553,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0657g",
    "Frequency_Hz": 0.8026390772861168,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0749",
    "Frequency_Hz": 4.216539665569968,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0905g",
    "Frequency_Hz": 0.6689500160548004,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0912",
    "Frequency_Hz": 4.48486592863,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+0930g",
    "Frequency_Hz": 0.4948584210057503,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+1102",
    "Frequency_Hz": 3.525564471224,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+1132g",
    "Frequency_Hz": 147.05882352941177,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+1148",
    "Frequency_Hz": 2.227442025412118,
    "prime": 2
  },
  {
    "PSRJ": "J1909+1205",
    "Frequency_Hz": 0.8134628617731994,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+1450",
    "Frequency_Hz": 1.0039074132526173,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1909+1859",
    "Frequency_Hz": 1.8434844806258999,
    "prime": 2
  },
  {
    "PSRJ": "J1909-3744",
    "Frequency_Hz": 339.3156872184705,
    "prime": [
      3,
      113
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+0225",
    "Frequency_Hz": 2.959849608372,
    "prime": 3
  },
  {
    "PSRJ": "J1910+0358",
    "Frequency_Hz": 0.429135475322,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+0435",
    "Frequency_Hz": 1.5044846811636252,
    "prime": 2
  },
  {
    "PSRJ": "J1910+0517",
    "Frequency_Hz": 3.24624601344,
    "prime": 3
  },
  {
    "PSRJ": "J1910+0534",
    "Frequency_Hz": 2.2081521031,
    "prime": 2
  },
  {
    "PSRJ": "J1910+0710",
    "Frequency_Hz": 1.8565041552079027,
    "prime": 2
  },
  {
    "PSRJ": "J1910+0714",
    "Frequency_Hz": 0.368673333691,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+0728",
    "Frequency_Hz": 3.072947121157,
    "prime": 3
  },
  {
    "PSRJ": "J1910+1017",
    "Frequency_Hz": 2.432149914459078,
    "prime": 2
  },
  {
    "PSRJ": "J1910+1026",
    "Frequency_Hz": 1.881492204197816,
    "prime": 2
  },
  {
    "PSRJ": "J1910+1054g",
    "Frequency_Hz": 258.39793281653743,
    "prime": [
      2,
      3,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+1117g",
    "Frequency_Hz": 0.7567044009927961,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+1231",
    "Frequency_Hz": 0.6936019125996,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+1256",
    "Frequency_Hz": 200.658802230113,
    "prime": [
      3,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910+56",
    "Frequency_Hz": 2.9248318221702254,
    "prime": 3
  },
  {
    "PSRJ": "J1910-0112",
    "Frequency_Hz": 0.7349682846,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-0309",
    "Frequency_Hz": 1.981742617133,
    "prime": 2
  },
  {
    "PSRJ": "J1910-0556",
    "Frequency_Hz": 1.79337054324,
    "prime": 2
  },
  {
    "PSRJ": "J1910-5320",
    "Frequency_Hz": 428.7490184657,
    "prime": [
      3,
      11,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-5959A",
    "Frequency_Hz": 306.16744090851,
    "prime": [
      2,
      3,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-5959B",
    "Frequency_Hz": 119.64873284502092,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-5959C",
    "Frequency_Hz": 189.48987107046844,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-5959D",
    "Frequency_Hz": 110.67719198432208,
    "prime": [
      3,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-5959E",
    "Frequency_Hz": 218.73385758998052,
    "prime": [
      3,
      73
    ],
    "derived": true
  },
  {
    "PSRJ": "J1910-5959F",
    "Frequency_Hz": 117.8481780116,
    "prime": [
      2,
      59
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+00",
    "Frequency_Hz": 0.1440922190201729,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+0101A",
    "Frequency_Hz": 276.3557546166339,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+0101B",
    "Frequency_Hz": 185.7242772016444,
    "prime": [
      2,
      3,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+0310g",
    "Frequency_Hz": 0.7501875468867217,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+0751g",
    "Frequency_Hz": 1.2548468459424527,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+0921",
    "Frequency_Hz": 3.6535451539388455,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+0925",
    "Frequency_Hz": 3.087777352142632,
    "prime": 3
  },
  {
    "PSRJ": "J1911+0939g",
    "Frequency_Hz": 2.73620269789586,
    "prime": 3
  },
  {
    "PSRJ": "J1911+1017g",
    "Frequency_Hz": 0.7479431563201197,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+1051",
    "Frequency_Hz": 5.239089931163207,
    "prime": 5
  },
  {
    "PSRJ": "J1911+1252g",
    "Frequency_Hz": 36.71071953010279,
    "prime": 37
  },
  {
    "PSRJ": "J1911+1301",
    "Frequency_Hz": 0.9896465813453297,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+1336",
    "Frequency_Hz": 3.333421769279546,
    "prime": 3
  },
  {
    "PSRJ": "J1911+1347",
    "Frequency_Hz": 216.171227371979,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1911+1758",
    "Frequency_Hz": 2.1719968758210664,
    "prime": 2
  },
  {
    "PSRJ": "J1911-1114",
    "Frequency_Hz": 275.8053380432929,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1912+0934g",
    "Frequency_Hz": 1.114243373037539,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1912+1000g",
    "Frequency_Hz": 0.32754667540124466,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1912+1036",
    "Frequency_Hz": 2.4429003444189505,
    "prime": 2
  },
  {
    "PSRJ": "J1912+1105g",
    "Frequency_Hz": 1.4909573437103965,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1912+1417g",
    "Frequency_Hz": 315.45741324921136,
    "prime": [
      3,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1912+2104",
    "Frequency_Hz": 0.4478342454993,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1912+2525",
    "Frequency_Hz": 1.60777907829241,
    "prime": 2
  },
  {
    "PSRJ": "J1912-0952",
    "Frequency_Hz": 39.89141833615,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+0446",
    "Frequency_Hz": 0.6187621536516225,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+0523",
    "Frequency_Hz": 1.5105798954989038,
    "prime": 2
  },
  {
    "PSRJ": "J1913+0618",
    "Frequency_Hz": 198.93129209203,
    "prime": 199
  },
  {
    "PSRJ": "J1913+0657",
    "Frequency_Hz": 0.7954303457670991,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+0832",
    "Frequency_Hz": 7.43980984068,
    "prime": 7
  },
  {
    "PSRJ": "J1913+0904",
    "Frequency_Hz": 6.1253809264,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+0936",
    "Frequency_Hz": 0.8051759289397722,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+1000",
    "Frequency_Hz": 1.19451732928,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+1011",
    "Frequency_Hz": 27.84672785077,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+1037g",
    "Frequency_Hz": 2.3030330945855693,
    "prime": 2
  },
  {
    "PSRJ": "J1913+1050",
    "Frequency_Hz": 5.261299613432937,
    "prime": 5
  },
  {
    "PSRJ": "J1913+1054g",
    "Frequency_Hz": 2.2191647064045092,
    "prime": 2
  },
  {
    "PSRJ": "J1913+1102",
    "Frequency_Hz": 36.65016488379,
    "prime": 37
  },
  {
    "PSRJ": "J1913+11025",
    "Frequency_Hz": 1.0824011216511908,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+1145",
    "Frequency_Hz": 3.26720336192,
    "prime": 3
  },
  {
    "PSRJ": "J1913+1330",
    "Frequency_Hz": 1.0829644010729,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913+1400",
    "Frequency_Hz": 1.91764342137,
    "prime": 2
  },
  {
    "PSRJ": "J1913+3732",
    "Frequency_Hz": 1.174979047088,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1913-0440",
    "Frequency_Hz": 1.2107412577371,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+0219",
    "Frequency_Hz": 2.185662663152,
    "prime": 2
  },
  {
    "PSRJ": "J1914+0625",
    "Frequency_Hz": 1.1377995507850662,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+0631",
    "Frequency_Hz": 1.441314243856,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+0659",
    "Frequency_Hz": 54.019532502606666,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+0805",
    "Frequency_Hz": 2.1953926210799177,
    "prime": 2
  },
  {
    "PSRJ": "J1914+0838",
    "Frequency_Hz": 2.272521285876727,
    "prime": 2
  },
  {
    "PSRJ": "J1914+1029g",
    "Frequency_Hz": 0.4024161063022387,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+1054g",
    "Frequency_Hz": 7.200979333189314,
    "prime": 7
  },
  {
    "PSRJ": "J1914+1122",
    "Frequency_Hz": 1.6638978240971,
    "prime": 2
  },
  {
    "PSRJ": "J1914+1228g",
    "Frequency_Hz": 0.4390682970736098,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+1428",
    "Frequency_Hz": 0.8624259912536798,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1914+2636",
    "Frequency_Hz": 2.178106798635,
    "prime": 2
  },
  {
    "PSRJ": "J1915+0227",
    "Frequency_Hz": 3.151527962212,
    "prime": 3
  },
  {
    "PSRJ": "J1915+0639",
    "Frequency_Hz": 1.5524571709347947,
    "prime": 2
  },
  {
    "PSRJ": "J1915+0738",
    "Frequency_Hz": 0.648211054637,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915+0752",
    "Frequency_Hz": 0.4858345727136726,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915+0832g",
    "Frequency_Hz": 0.3689914357087772,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915+0838",
    "Frequency_Hz": 2.91734175119,
    "prime": 3
  },
  {
    "PSRJ": "J1915+1009",
    "Frequency_Hz": 2.4718570439343,
    "prime": 2
  },
  {
    "PSRJ": "J1915+1045g",
    "Frequency_Hz": 0.6468305304010349,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915+1145",
    "Frequency_Hz": 5.758803048229232,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915+1150",
    "Frequency_Hz": 9.995906215593438,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915+1410",
    "Frequency_Hz": 3.36141095625,
    "prime": 3
  },
  {
    "PSRJ": "J1915+1606",
    "Frequency_Hz": 16.940537785677,
    "prime": 17
  },
  {
    "PSRJ": "J1915+1647",
    "Frequency_Hz": 0.618723247886,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1915-11",
    "Frequency_Hz": 0.45934772622875514,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+0741g",
    "Frequency_Hz": 89.12655971479501,
    "prime": 89
  },
  {
    "PSRJ": "J1916+0748",
    "Frequency_Hz": 1.8458626639539313,
    "prime": 2
  },
  {
    "PSRJ": "J1916+07481",
    "Frequency_Hz": 1.1522323827686718,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+0844",
    "Frequency_Hz": 2.272742104024,
    "prime": 2
  },
  {
    "PSRJ": "J1916+0852",
    "Frequency_Hz": 0.45813851213,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+0937g",
    "Frequency_Hz": 0.13572204125950055,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+0951",
    "Frequency_Hz": 3.700188397774,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+1023",
    "Frequency_Hz": 0.617917537,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+1030",
    "Frequency_Hz": 1.589901540415,
    "prime": 2
  },
  {
    "PSRJ": "J1916+10305",
    "Frequency_Hz": 2.86221306314042,
    "prime": 3
  },
  {
    "PSRJ": "J1916+1142Bg",
    "Frequency_Hz": 0.8417508417508418,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+1225",
    "Frequency_Hz": 4.397779338311521,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+1312",
    "Frequency_Hz": 3.548042944291,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+3224",
    "Frequency_Hz": 0.8791595234955382,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1916+38",
    "Frequency_Hz": 1.9455252918287937,
    "prime": 2
  },
  {
    "PSRJ": "J1916-2939",
    "Frequency_Hz": 0.800886123286519,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1917+0743g",
    "Frequency_Hz": 1.2293269786077041,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1917+0834",
    "Frequency_Hz": 0.4695549800553,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1917+08340",
    "Frequency_Hz": 0.34094783498124787,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1917+1046g",
    "Frequency_Hz": 11.398609369656901,
    "prime": 11
  },
  {
    "PSRJ": "J1917+1121g",
    "Frequency_Hz": 1.9595931884540767,
    "prime": 2
  },
  {
    "PSRJ": "J1917+1259g",
    "Frequency_Hz": 177.61989342806396,
    "prime": [
      2,
      89
    ],
    "derived": true
  },
  {
    "PSRJ": "J1917+1353",
    "Frequency_Hz": 5.1377698913332,
    "prime": 5
  },
  {
    "PSRJ": "J1917+1411g",
    "Frequency_Hz": 2.2398423151010167,
    "prime": 2
  },
  {
    "PSRJ": "J1917+17",
    "Frequency_Hz": 2.3832221163012393,
    "prime": 2
  },
  {
    "PSRJ": "J1917+1737",
    "Frequency_Hz": 2.987525050560369,
    "prime": 3
  },
  {
    "PSRJ": "J1917+2224",
    "Frequency_Hz": 2.34798414425,
    "prime": 2
  },
  {
    "PSRJ": "J1918+1311",
    "Frequency_Hz": 1.1672031765996969,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918+1340g",
    "Frequency_Hz": 4.2920297008455295,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918+1444",
    "Frequency_Hz": 0.846595727676,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918+1536g",
    "Frequency_Hz": 9.095043201455207,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918+1540g",
    "Frequency_Hz": 233.6448598130841,
    "prime": [
      2,
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918+1541",
    "Frequency_Hz": 2.6962681042711845,
    "prime": 3
  },
  {
    "PSRJ": "J1918+1547g",
    "Frequency_Hz": 265.95744680851067,
    "prime": [
      2,
      7,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918+26",
    "Frequency_Hz": 1.3831258644536653,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1918-0642",
    "Frequency_Hz": 130.789514123371,
    "prime": 131
  },
  {
    "PSRJ": "J1918-1052",
    "Frequency_Hz": 1.2520462467918818,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+0021",
    "Frequency_Hz": 0.7859985325964,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+0134",
    "Frequency_Hz": 0.623447627134,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+1113g",
    "Frequency_Hz": 1.3054830287206267,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+1314",
    "Frequency_Hz": 1.7500879313458313,
    "prime": 2
  },
  {
    "PSRJ": "J1919+1527g",
    "Frequency_Hz": 0.7291499569801526,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+1645",
    "Frequency_Hz": 1.7768617488540874,
    "prime": 2
  },
  {
    "PSRJ": "J1919+1745",
    "Frequency_Hz": 0.48045890519799483,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+23",
    "Frequency_Hz": 215.98272138228944,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1919+2621",
    "Frequency_Hz": 1.5348909239,
    "prime": 2
  },
  {
    "PSRJ": "J1920+1040",
    "Frequency_Hz": 0.45130391517,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1920+1110",
    "Frequency_Hz": 1.9612233953,
    "prime": 2
  },
  {
    "PSRJ": "J1920+1515g",
    "Frequency_Hz": 0.6239237315630537,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1920+2650",
    "Frequency_Hz": 1.273039063907,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1920-0950",
    "Frequency_Hz": 0.9635545129822717,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+0137",
    "Frequency_Hz": 400.58135339439866,
    "prime": 401
  },
  {
    "PSRJ": "J1921+0812",
    "Frequency_Hz": 4.747199910556,
    "prime": 5
  },
  {
    "PSRJ": "J1921+0851g",
    "Frequency_Hz": 1.044932079414838,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+0921",
    "Frequency_Hz": 1.778402863595482,
    "prime": 2
  },
  {
    "PSRJ": "J1921+1006g",
    "Frequency_Hz": 0.2989536621823617,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+1227g",
    "Frequency_Hz": 0.6257822277847309,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+1259g",
    "Frequency_Hz": 1.7447135180403377,
    "prime": 2
  },
  {
    "PSRJ": "J1921+1340g",
    "Frequency_Hz": 0.21725245169391735,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+1419",
    "Frequency_Hz": 1.617631522306,
    "prime": 2
  },
  {
    "PSRJ": "J1921+1505g",
    "Frequency_Hz": 1.6342539630658603,
    "prime": 2
  },
  {
    "PSRJ": "J1921+1544",
    "Frequency_Hz": 6.964967814769008,
    "prime": 7
  },
  {
    "PSRJ": "J1921+1630",
    "Frequency_Hz": 1.0678649446889166,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+1632g",
    "Frequency_Hz": 2.028397565922921,
    "prime": 2
  },
  {
    "PSRJ": "J1921+1929",
    "Frequency_Hz": 377.88018632311,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+1948",
    "Frequency_Hz": 1.217973511001,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+2003",
    "Frequency_Hz": 1.3146108402735062,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+2153",
    "Frequency_Hz": 0.7477741603725,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921+34",
    "Frequency_Hz": 0.6925207756232687,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921-05",
    "Frequency_Hz": 0.44891564426128683,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1921-0510",
    "Frequency_Hz": 1.25904326788,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1922+1131",
    "Frequency_Hz": 1.7791242493417712,
    "prime": 2
  },
  {
    "PSRJ": "J1922+1733",
    "Frequency_Hz": 4.23410191865,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1922+2018",
    "Frequency_Hz": 0.852686908781,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1922+2110",
    "Frequency_Hz": 0.92770889396,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1922+37",
    "Frequency_Hz": 0.5208333333333334,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1922+58",
    "Frequency_Hz": 1.8881355228152858,
    "prime": 2
  },
  {
    "PSRJ": "J1923+1143g",
    "Frequency_Hz": 2.693892944694378,
    "prime": 3
  },
  {
    "PSRJ": "J1923+1521g",
    "Frequency_Hz": 0.9535069987413708,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1923+1706",
    "Frequency_Hz": 1.82745452277,
    "prime": 2
  },
  {
    "PSRJ": "J1923+2022g",
    "Frequency_Hz": 26.322716504343248,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1923+2515",
    "Frequency_Hz": 263.9807142255208,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1923+4243",
    "Frequency_Hz": 1.68012768584,
    "prime": 2
  },
  {
    "PSRJ": "J1923-0408",
    "Frequency_Hz": 0.87011802908,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1343g",
    "Frequency_Hz": 174.82517482517483,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1446g",
    "Frequency_Hz": 0.9174311926605504,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1509g",
    "Frequency_Hz": 4.167534903104814,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1510g",
    "Frequency_Hz": 2.0054950564546856,
    "prime": 2
  },
  {
    "PSRJ": "J1924+1628",
    "Frequency_Hz": 2.6660818988490957,
    "prime": 3
  },
  {
    "PSRJ": "J1924+1631",
    "Frequency_Hz": 0.34069385843124766,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1639",
    "Frequency_Hz": 6.327395203976023,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1713",
    "Frequency_Hz": 1.318507618097664,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1917",
    "Frequency_Hz": 0.7825083562176234,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1923g",
    "Frequency_Hz": 1.450873425802333,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+1932g",
    "Frequency_Hz": 2.5716196060278764,
    "prime": 3
  },
  {
    "PSRJ": "J1924+2027g",
    "Frequency_Hz": 512.8205128205128,
    "prime": [
      3,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+2037g",
    "Frequency_Hz": 1.4602803738317758,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1924+2040",
    "Frequency_Hz": 4.205388871089347,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1925+1532g",
    "Frequency_Hz": 0.6041931001147967,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1925+1629g",
    "Frequency_Hz": 243.30900243309003,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1925+1636g",
    "Frequency_Hz": 20.116676725005032,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1925+1720",
    "Frequency_Hz": 13.217200235482462,
    "prime": 13
  },
  {
    "PSRJ": "J1925+19",
    "Frequency_Hz": 0.521824528153216,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1925-16",
    "Frequency_Hz": 0.2573472643985794,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926+0431",
    "Frequency_Hz": 0.931029279866,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926+0737",
    "Frequency_Hz": 3.1440405950572745,
    "prime": 3
  },
  {
    "PSRJ": "J1926+1434",
    "Frequency_Hz": 0.754761301536,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926+1452g",
    "Frequency_Hz": 3.2839644018258842,
    "prime": 3
  },
  {
    "PSRJ": "J1926+1614",
    "Frequency_Hz": 3.243531753597387,
    "prime": 3
  },
  {
    "PSRJ": "J1926+1631g",
    "Frequency_Hz": 1.474129041961456,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926+1648",
    "Frequency_Hz": 1.724620631863,
    "prime": 2
  },
  {
    "PSRJ": "J1926+1857g",
    "Frequency_Hz": 3.5877013597388157,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926+1928",
    "Frequency_Hz": 0.7429353249517615,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926+2016",
    "Frequency_Hz": 3.3436789178023507,
    "prime": 3
  },
  {
    "PSRJ": "J1926-0652",
    "Frequency_Hz": 0.621574989896,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1926-1314",
    "Frequency_Hz": 0.20558011027953357,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1927+0911",
    "Frequency_Hz": 3.44464999739,
    "prime": 3
  },
  {
    "PSRJ": "J1927+1430g",
    "Frequency_Hz": 4.929022082018927,
    "prime": 5
  },
  {
    "PSRJ": "J1927+1849g",
    "Frequency_Hz": 3.2051282051282053,
    "prime": 3
  },
  {
    "PSRJ": "J1927+1852",
    "Frequency_Hz": 2.071395365584,
    "prime": 2
  },
  {
    "PSRJ": "J1927+1856",
    "Frequency_Hz": 3.352161172434,
    "prime": 3
  },
  {
    "PSRJ": "J1927+2234",
    "Frequency_Hz": 0.6987795884608665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1245",
    "Frequency_Hz": 330.94979452682,
    "prime": 331
  },
  {
    "PSRJ": "J1928+1443",
    "Frequency_Hz": 0.9893751463488787,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+15",
    "Frequency_Hz": 2.4813895781637716,
    "prime": 2
  },
  {
    "PSRJ": "J1928+1725",
    "Frequency_Hz": 3.4501992886862136,
    "prime": 3
  },
  {
    "PSRJ": "J1928+1746",
    "Frequency_Hz": 14.5484852843,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1809g",
    "Frequency_Hz": 3.3960470012904977,
    "prime": 3
  },
  {
    "PSRJ": "J1928+1816g",
    "Frequency_Hz": 94.87666034155598,
    "prime": [
      5,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1839g",
    "Frequency_Hz": 0.4422997819462075,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1852g",
    "Frequency_Hz": 1.261341099297479,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1902g",
    "Frequency_Hz": 172.41379310344828,
    "prime": [
      2,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1915g",
    "Frequency_Hz": 1.0263252424693385,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+1923",
    "Frequency_Hz": 1.223496304466445,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928+28",
    "Frequency_Hz": 0.9407337723424272,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928-0108",
    "Frequency_Hz": 0.42270536055,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1928-0548",
    "Frequency_Hz": 35.662175932705,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+00",
    "Frequency_Hz": 0.856971462850287,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+0132",
    "Frequency_Hz": 155.80651370922,
    "prime": [
      2,
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+1357",
    "Frequency_Hz": 1.15350009753,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+16",
    "Frequency_Hz": 1.8879287722232818,
    "prime": 2
  },
  {
    "PSRJ": "J1929+1615g",
    "Frequency_Hz": 22.42152466367713,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+1731g",
    "Frequency_Hz": 0.2502878310056565,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+1844",
    "Frequency_Hz": 0.8193564743814392,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+19",
    "Frequency_Hz": 2.947975890273979,
    "prime": 3
  },
  {
    "PSRJ": "J1929+1937g",
    "Frequency_Hz": 1.7738988522874428,
    "prime": 2
  },
  {
    "PSRJ": "J1929+1955",
    "Frequency_Hz": 3.8784760942028,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+2121",
    "Frequency_Hz": 1.3819818525017715,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+3817",
    "Frequency_Hz": 1.2281764674861686,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+62",
    "Frequency_Hz": 0.6868131868131868,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+66",
    "Frequency_Hz": 1.2406947890818858,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1929+6630",
    "Frequency_Hz": 1.24066854069,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1930+1316",
    "Frequency_Hz": 1.3157341292151048,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1930+1357g",
    "Frequency_Hz": 3.0906001082563797,
    "prime": 3
  },
  {
    "PSRJ": "J1930+1403g",
    "Frequency_Hz": 311.5264797507788,
    "prime": [
      2,
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1930+1408",
    "Frequency_Hz": 2.348959950398727,
    "prime": 2
  },
  {
    "PSRJ": "J1930+1722",
    "Frequency_Hz": 0.6212313243175128,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1930+1852",
    "Frequency_Hz": 7.30700125596538,
    "prime": 7
  },
  {
    "PSRJ": "J1930+2441",
    "Frequency_Hz": 173.38814681699,
    "prime": 173
  },
  {
    "PSRJ": "J1930+6205",
    "Frequency_Hz": 0.686758970941,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1930-1852",
    "Frequency_Hz": 5.390249757313,
    "prime": 5
  },
  {
    "PSRJ": "J1931+1439",
    "Frequency_Hz": 0.5620422806861362,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1931+1536",
    "Frequency_Hz": 3.18107864855,
    "prime": 3
  },
  {
    "PSRJ": "J1931+1817",
    "Frequency_Hz": 4.271105151248797,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1931+1952",
    "Frequency_Hz": 1.9955176176649996,
    "prime": 2
  },
  {
    "PSRJ": "J1931+30",
    "Frequency_Hz": 1.7178411546641104,
    "prime": 2
  },
  {
    "PSRJ": "J1931-0144",
    "Frequency_Hz": 1.68446199761,
    "prime": 2
  },
  {
    "PSRJ": "J1932+1059",
    "Frequency_Hz": 4.4146421450799,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1932+1500",
    "Frequency_Hz": 0.53638518841,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1932+1756",
    "Frequency_Hz": 23.90555115685,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1932+1916",
    "Frequency_Hz": 4.80266684174,
    "prime": 5
  },
  {
    "PSRJ": "J1932+2020",
    "Frequency_Hz": 3.72831885206,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1932+2220",
    "Frequency_Hz": 6.9218635401,
    "prime": 7
  },
  {
    "PSRJ": "J1932-3655",
    "Frequency_Hz": 1.750024494157,
    "prime": 2
  },
  {
    "PSRJ": "J1933+0758",
    "Frequency_Hz": 2.285952509569639,
    "prime": 2
  },
  {
    "PSRJ": "J1933+1304",
    "Frequency_Hz": 1.0772101343087,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1933+1726",
    "Frequency_Hz": 46.49598409212837,
    "prime": [
      2,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1933+1923g",
    "Frequency_Hz": 2.690124552766793,
    "prime": 3
  },
  {
    "PSRJ": "J1933+2038g",
    "Frequency_Hz": 24.539877300613497,
    "prime": [
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1933+2421",
    "Frequency_Hz": 1.22896880609,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1933+5335",
    "Frequency_Hz": 0.4871930372670665,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1933-6211",
    "Frequency_Hz": 282.212313459989,
    "prime": [
      2,
      3,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J1934+1926",
    "Frequency_Hz": 4.32929621317241,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1934+2352",
    "Frequency_Hz": 5.604390858117049,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1934+5219",
    "Frequency_Hz": 1.75919355395,
    "prime": 2
  },
  {
    "PSRJ": "J1935+1159",
    "Frequency_Hz": 0.51552817782,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1935+1616",
    "Frequency_Hz": 2.7874942067382,
    "prime": 3
  },
  {
    "PSRJ": "J1935+1726",
    "Frequency_Hz": 238.0894677202372,
    "prime": [
      2,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J1935+1745",
    "Frequency_Hz": 1.5280983362164913,
    "prime": 2
  },
  {
    "PSRJ": "J1935+1829",
    "Frequency_Hz": 1.1854691213335347,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1935+1841g",
    "Frequency_Hz": 0.18086453246518358,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1935+1901g",
    "Frequency_Hz": 1.1148272017837235,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1935+2025",
    "Frequency_Hz": 12.476777776,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1935+2154",
    "Frequency_Hz": 0.3081683092037547,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1936+1536",
    "Frequency_Hz": 1.0337644318666583,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1936+18",
    "Frequency_Hz": 17.139391068286248,
    "prime": 17
  },
  {
    "PSRJ": "J1936+1952g",
    "Frequency_Hz": 102.88065843621399,
    "prime": 103
  },
  {
    "PSRJ": "J1936+2036g",
    "Frequency_Hz": 30.376670716889432,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1936+2042",
    "Frequency_Hz": 0.7190485557429722,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1936+21",
    "Frequency_Hz": 1.5553067064825183,
    "prime": 2
  },
  {
    "PSRJ": "J1936+217",
    "Frequency_Hz": 31.66373618788248,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1937+1505",
    "Frequency_Hz": 0.3480956461,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1937+1658",
    "Frequency_Hz": 252.67407210877,
    "prime": [
      11,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1937+2544",
    "Frequency_Hz": 4.97561445281,
    "prime": 5
  },
  {
    "PSRJ": "J1937+2950",
    "Frequency_Hz": 0.603344173844,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1937+34",
    "Frequency_Hz": 0.5717552887364208,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1937-00",
    "Frequency_Hz": 4.164931278633903,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+0650",
    "Frequency_Hz": 0.8916137460918654,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+14",
    "Frequency_Hz": 0.34453057708871665,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+1748g",
    "Frequency_Hz": 0.14072614691809737,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+2010",
    "Frequency_Hz": 1.4554306598783542,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+2012",
    "Frequency_Hz": 379.6312457708379,
    "prime": [
      2,
      5,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+2213",
    "Frequency_Hz": 6.019905184068943,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+2659",
    "Frequency_Hz": 1.1320774608551862,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938+6604",
    "Frequency_Hz": 44.926049244297,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1938-0940",
    "Frequency_Hz": 5.751536555171,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1939+10",
    "Frequency_Hz": 0.4329004329004329,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1939+2134",
    "Frequency_Hz": 641.928222127829,
    "prime": [
      2,
      3,
      107
    ],
    "derived": true
  },
  {
    "PSRJ": "J1939+2352g",
    "Frequency_Hz": 0.4661265813344272,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1939+2449",
    "Frequency_Hz": 1.5496608915,
    "prime": 2
  },
  {
    "PSRJ": "J1939+2609",
    "Frequency_Hz": 2.1414993312436663,
    "prime": 2
  },
  {
    "PSRJ": "J1940+0239",
    "Frequency_Hz": 0.8115302213854444,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940+14",
    "Frequency_Hz": 0.7818608287724785,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940+2203g",
    "Frequency_Hz": 0.08399126490844952,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940+2231g",
    "Frequency_Hz": 0.1759943681802182,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940+2245",
    "Frequency_Hz": 3.862316204962812,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940+2337",
    "Frequency_Hz": 1.8287414435443337,
    "prime": 2
  },
  {
    "PSRJ": "J1940+26",
    "Frequency_Hz": 207.7477789061714,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940-0902",
    "Frequency_Hz": 1.02200568492,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940-24",
    "Frequency_Hz": 10.183299389002038,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1940-2403",
    "Frequency_Hz": 0.5390033612249606,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1941+0121",
    "Frequency_Hz": 4.60156325038943,
    "prime": 5
  },
  {
    "PSRJ": "J1941+1026",
    "Frequency_Hz": 1.1044916614995446,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1941+1341",
    "Frequency_Hz": 1.78863967224,
    "prime": 2
  },
  {
    "PSRJ": "J1941+2525",
    "Frequency_Hz": 0.43362257404430665,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1941+4320",
    "Frequency_Hz": 1.189192897888,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1941-2602",
    "Frequency_Hz": 2.48225999733,
    "prime": 2
  },
  {
    "PSRJ": "J1942+0147",
    "Frequency_Hz": 0.7117235096509708,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1942+1743",
    "Frequency_Hz": 1.4362405122683524,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1942+3941",
    "Frequency_Hz": 0.73893939554,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1942+8106",
    "Frequency_Hz": 4.91259383196,
    "prime": 5
  },
  {
    "PSRJ": "J1942-2019",
    "Frequency_Hz": 3.63460946068,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1943+0609",
    "Frequency_Hz": 2.2410138579095,
    "prime": 2
  },
  {
    "PSRJ": "J1943+2210",
    "Frequency_Hz": 196.6887956594,
    "prime": 197
  },
  {
    "PSRJ": "J1943+5815",
    "Frequency_Hz": 0.786876829081,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1943-1237",
    "Frequency_Hz": 1.0283512362698,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1944+0907",
    "Frequency_Hz": 192.8565208431179,
    "prime": 193
  },
  {
    "PSRJ": "J1944+1755",
    "Frequency_Hz": 0.500776450506269,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1944+2236",
    "Frequency_Hz": 276.3963275801,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J1944-10",
    "Frequency_Hz": 2.4441810160460484,
    "prime": 2
  },
  {
    "PSRJ": "J1944-1750",
    "Frequency_Hz": 1.188837612282,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1945+07",
    "Frequency_Hz": 0.9311853990129434,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1945+1211",
    "Frequency_Hz": 0.2102255216,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1945+1834",
    "Frequency_Hz": 0.9357095566011593,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1945-0040",
    "Frequency_Hz": 0.956358508607,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946+14",
    "Frequency_Hz": 0.43812761781251647,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946+1805",
    "Frequency_Hz": 2.269536995865,
    "prime": 2
  },
  {
    "PSRJ": "J1946+2052",
    "Frequency_Hz": 58.9616546384,
    "prime": 59
  },
  {
    "PSRJ": "J1946+2244",
    "Frequency_Hz": 0.7493724803053309,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946+24",
    "Frequency_Hz": 0.2114611968703743,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946+2535",
    "Frequency_Hz": 1.9411179295281706,
    "prime": 2
  },
  {
    "PSRJ": "J1946+2611",
    "Frequency_Hz": 2.2985335356042844,
    "prime": 2
  },
  {
    "PSRJ": "J1946+3417",
    "Frequency_Hz": 315.443563681749,
    "prime": [
      3,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946-09",
    "Frequency_Hz": 10.964912280701753,
    "prime": 11
  },
  {
    "PSRJ": "J1946-1312",
    "Frequency_Hz": 1.016535792634,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946-2913",
    "Frequency_Hz": 1.0422645378409,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1946-5403",
    "Frequency_Hz": 369.00369003690037,
    "prime": [
      3,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947+0915",
    "Frequency_Hz": 0.6753362625120221,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947+10",
    "Frequency_Hz": 0.9001353803612063,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947+1957",
    "Frequency_Hz": 6.348861997371963,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947+2011g",
    "Frequency_Hz": 122.39902080783354,
    "prime": [
      2,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947-18",
    "Frequency_Hz": 384.1381668158403,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947-4215",
    "Frequency_Hz": 0.5561521832588182,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1947-43",
    "Frequency_Hz": 5.526693931690064,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1948+06",
    "Frequency_Hz": 0.7547169811320755,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1948+1808",
    "Frequency_Hz": 2.535789965323772,
    "prime": 3
  },
  {
    "PSRJ": "J1948+2314g",
    "Frequency_Hz": 0.6798096532970768,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1948+2333",
    "Frequency_Hz": 1.8926770238837043,
    "prime": 2
  },
  {
    "PSRJ": "J1948+2438g",
    "Frequency_Hz": 0.5254860746190226,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1948+2551",
    "Frequency_Hz": 5.085776357868093,
    "prime": 5
  },
  {
    "PSRJ": "J1948+2819",
    "Frequency_Hz": 1.0721642069268038,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1948+3540",
    "Frequency_Hz": 1.394095109822,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1948-27",
    "Frequency_Hz": 3.012048192771084,
    "prime": 3
  },
  {
    "PSRJ": "J1948-2730",
    "Frequency_Hz": 3.0153968411,
    "prime": 3
  },
  {
    "PSRJ": "J1949+2306",
    "Frequency_Hz": 0.7579355557279331,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1949+2516g",
    "Frequency_Hz": 2.437003460544914,
    "prime": 2
  },
  {
    "PSRJ": "J1949+3106",
    "Frequency_Hz": 76.1140249316119,
    "prime": [
      2,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J1949+3426",
    "Frequency_Hz": 2.5737442058583566,
    "prime": 3
  },
  {
    "PSRJ": "J1949-2524",
    "Frequency_Hz": 1.0442557278881,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1950+05",
    "Frequency_Hz": 2.1932999074427437,
    "prime": 2
  },
  {
    "PSRJ": "J1950+2352g",
    "Frequency_Hz": 3.127345509131849,
    "prime": 3
  },
  {
    "PSRJ": "J1950+2414",
    "Frequency_Hz": 232.30015221224,
    "prime": [
      2,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J1950+2556g",
    "Frequency_Hz": 0.4905230938272574,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1950+3001",
    "Frequency_Hz": 0.35856200798291044,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1951+1123",
    "Frequency_Hz": 0.19630618397885938,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1951+4724",
    "Frequency_Hz": 5.4966921263,
    "prime": 5
  },
  {
    "PSRJ": "J1952+1410",
    "Frequency_Hz": 3.63602406451,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1952+2513",
    "Frequency_Hz": 0.9279473950915521,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1952+2630",
    "Frequency_Hz": 48.233775392319,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J1952+2702g",
    "Frequency_Hz": 241.5458937198068,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1952+2836g",
    "Frequency_Hz": 55.49389567147613,
    "prime": [
      5,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J1952+3021",
    "Frequency_Hz": 0.6003608168509275,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1952+3252",
    "Frequency_Hz": 25.2964792556,
    "prime": [
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+1149",
    "Frequency_Hz": 1.173860474943948,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+1844",
    "Frequency_Hz": 225.01840471114,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+1846A",
    "Frequency_Hz": 204.58265139116202,
    "prime": [
      5,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+1846B",
    "Frequency_Hz": 12.51564455569462,
    "prime": 13
  },
  {
    "PSRJ": "J1953+1846C",
    "Frequency_Hz": 34.56619426201175,
    "prime": [
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+1846D",
    "Frequency_Hz": 9.933445912387008,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+2732",
    "Frequency_Hz": 0.7496448557495886,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+2819",
    "Frequency_Hz": 0.9891172833313796,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1953+30",
    "Frequency_Hz": 0.7866582756450597,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1954+1021",
    "Frequency_Hz": 0.4763174555424707,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1954+2407",
    "Frequency_Hz": 5.170508618033218,
    "prime": 5
  },
  {
    "PSRJ": "J1954+2529",
    "Frequency_Hz": 1.073871520285769,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1954+2836",
    "Frequency_Hz": 10.78643292,
    "prime": 11
  },
  {
    "PSRJ": "J1954+2923",
    "Frequency_Hz": 2.343694411248,
    "prime": 2
  },
  {
    "PSRJ": "J1954+3852",
    "Frequency_Hz": 2.83339513046409,
    "prime": 3
  },
  {
    "PSRJ": "J1954+4347",
    "Frequency_Hz": 0.72095898986,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1954+4357",
    "Frequency_Hz": 0.72095913858,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1955+2527",
    "Frequency_Hz": 205.22225531037,
    "prime": [
      5,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J1955+2908",
    "Frequency_Hz": 163.0479129097612,
    "prime": 163
  },
  {
    "PSRJ": "J1955+2912g",
    "Frequency_Hz": 3.5776895281027516,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1955+2930",
    "Frequency_Hz": 0.9312044757411921,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1955+5059",
    "Frequency_Hz": 1.9270125222336,
    "prime": 2
  },
  {
    "PSRJ": "J1955+6708",
    "Frequency_Hz": 116.74869454326,
    "prime": [
      3,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J1955-0907",
    "Frequency_Hz": 2.066115702479339,
    "prime": 2
  },
  {
    "PSRJ": "J1956+07",
    "Frequency_Hz": 0.1995020429009193,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1956+0838",
    "Frequency_Hz": 3.2904361436713,
    "prime": 3
  },
  {
    "PSRJ": "J1956+2826g",
    "Frequency_Hz": 13.92951664577239,
    "prime": [
      2,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1956+2911g",
    "Frequency_Hz": 0.2620545073375262,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J1956-2752",
    "Frequency_Hz": 3.8459408401996202,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J1957+2516",
    "Frequency_Hz": 252.41973709736774,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J1957+2831",
    "Frequency_Hz": 3.250099739409,
    "prime": 3
  },
  {
    "PSRJ": "J1957+5033",
    "Frequency_Hz": 2.66804205168,
    "prime": 3
  },
  {
    "PSRJ": "J1957-0002",
    "Frequency_Hz": 1.0361663867299078,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1958+2846",
    "Frequency_Hz": 3.4436537099,
    "prime": 3
  },
  {
    "PSRJ": "J1958+3033",
    "Frequency_Hz": 0.9102654747306558,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1958+56",
    "Frequency_Hz": 3.2071840923669015,
    "prime": 3
  },
  {
    "PSRJ": "J1959+2048",
    "Frequency_Hz": 622.1220305119268,
    "prime": [
      2,
      311
    ],
    "derived": true
  },
  {
    "PSRJ": "J1959+3620",
    "Frequency_Hz": 2.4625617900771424,
    "prime": 2
  },
  {
    "PSRJ": "J2000+04",
    "Frequency_Hz": 1.287001287001287,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2000+22",
    "Frequency_Hz": 0.9519276534983341,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2000+2920",
    "Frequency_Hz": 0.32533200944894286,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2001+0701",
    "Frequency_Hz": 146.628456916751,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2001+4258",
    "Frequency_Hz": 1.390499284334,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2001-0349",
    "Frequency_Hz": 0.74364701461,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2002+1637",
    "Frequency_Hz": 3.6166694427293034,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2002+30",
    "Frequency_Hz": 2.3708255688795954,
    "prime": 2
  },
  {
    "PSRJ": "J2002+3217",
    "Frequency_Hz": 1.4352133702,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2002+4050",
    "Frequency_Hz": 1.1048907965256,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2003+2916",
    "Frequency_Hz": 0.990219924969737,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2004+2653",
    "Frequency_Hz": 1.501775204249172,
    "prime": 2
  },
  {
    "PSRJ": "J2004+3137",
    "Frequency_Hz": 0.473649743674,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2004+3429",
    "Frequency_Hz": 4.1501931333482265,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2005+3156g",
    "Frequency_Hz": 0.4659832246039143,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2005+3411g",
    "Frequency_Hz": 1.535980339451655,
    "prime": 2
  },
  {
    "PSRJ": "J2005+3547",
    "Frequency_Hz": 1.6259266494731066,
    "prime": 2
  },
  {
    "PSRJ": "J2005+3552",
    "Frequency_Hz": 3.247355223751779,
    "prime": 3
  },
  {
    "PSRJ": "J2005-0020",
    "Frequency_Hz": 0.438658051563,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2006+0148",
    "Frequency_Hz": 462.20187192375,
    "prime": [
      2,
      3,
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2006+22",
    "Frequency_Hz": 0.574085768413801,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2006+3102",
    "Frequency_Hz": 6.1089132566508475,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2006+4058",
    "Frequency_Hz": 2.001221096605,
    "prime": 2
  },
  {
    "PSRJ": "J2006-0807",
    "Frequency_Hz": 1.721551495306,
    "prime": 2
  },
  {
    "PSRJ": "J2007+0809",
    "Frequency_Hz": 3.0700804245221742,
    "prime": 3
  },
  {
    "PSRJ": "J2007+0910",
    "Frequency_Hz": 2.1799086176636835,
    "prime": 2
  },
  {
    "PSRJ": "J2007+20",
    "Frequency_Hz": 0.21579628830384115,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2007+2722",
    "Frequency_Hz": 40.820677605083,
    "prime": 41
  },
  {
    "PSRJ": "J2007+3120",
    "Frequency_Hz": 1.6441824713706727,
    "prime": 2
  },
  {
    "PSRJ": "J2008+2513",
    "Frequency_Hz": 1.6972280870881675,
    "prime": 2
  },
  {
    "PSRJ": "J2008+2755g",
    "Frequency_Hz": 0.6582151837078577,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2008+3139",
    "Frequency_Hz": 4.422457251791656,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2008+3758",
    "Frequency_Hz": 0.2297634166,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2009+3122g",
    "Frequency_Hz": 13.065064018813693,
    "prime": 13
  },
  {
    "PSRJ": "J2009+3326",
    "Frequency_Hz": 0.695231891121124,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2010+2845",
    "Frequency_Hz": 1.7687563343586223,
    "prime": 2
  },
  {
    "PSRJ": "J2010+3051",
    "Frequency_Hz": 207.62936108328,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2010+31",
    "Frequency_Hz": 0.6445209275945191,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2010+3230",
    "Frequency_Hz": 0.6932661228354708,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2010-1323",
    "Frequency_Hz": 191.4509120380344,
    "prime": 191
  },
  {
    "PSRJ": "J2011+3006g",
    "Frequency_Hz": 0.39909644564705504,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2011+3331",
    "Frequency_Hz": 1.073268844186049,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2012-2029",
    "Frequency_Hz": 1.8382289731443022,
    "prime": 2
  },
  {
    "PSRJ": "J2013+3058",
    "Frequency_Hz": 3.6228208732447436,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2013+3100g",
    "Frequency_Hz": 2.71333604666938,
    "prime": 3
  },
  {
    "PSRJ": "J2013+3845",
    "Frequency_Hz": 4.344169168005,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2013-0649",
    "Frequency_Hz": 1.7235814252213044,
    "prime": 2
  },
  {
    "PSRJ": "J2014+10",
    "Frequency_Hz": 0.8771929824561404,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2014+3326g",
    "Frequency_Hz": 1.0235414534288638,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2015+0756",
    "Frequency_Hz": 231.05446090789,
    "prime": [
      3,
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2015+2524",
    "Frequency_Hz": 0.4341598724264631,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2015+27",
    "Frequency_Hz": 3.245699448231094,
    "prime": 3
  },
  {
    "PSRJ": "J2016+1948",
    "Frequency_Hz": 15.3987376281305,
    "prime": [
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2016+3711",
    "Frequency_Hz": 19.68165408,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2016+3820",
    "Frequency_Hz": 4.32904344,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2016+4231",
    "Frequency_Hz": 0.804014,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2017+0603",
    "Frequency_Hz": 345.2781364654948,
    "prime": [
      3,
      5,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J2017+2043",
    "Frequency_Hz": 1.8617013343450641,
    "prime": 2
  },
  {
    "PSRJ": "J2017+2819g",
    "Frequency_Hz": 0.5457145040000874,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2017+3625",
    "Frequency_Hz": 5.99703102436,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2017+5906",
    "Frequency_Hz": 2.4784478211,
    "prime": 2
  },
  {
    "PSRJ": "J2017-0414",
    "Frequency_Hz": 24.630541871921185,
    "prime": [
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2017-1614",
    "Frequency_Hz": 432.09847591393583,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2017-2737",
    "Frequency_Hz": 4.4538744,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2018+2839",
    "Frequency_Hz": 1.792264113565,
    "prime": 2
  },
  {
    "PSRJ": "J2018+3418g",
    "Frequency_Hz": 0.4562876437306077,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2018+3431",
    "Frequency_Hz": 2.5795534277105947,
    "prime": 3
  },
  {
    "PSRJ": "J2018-0414",
    "Frequency_Hz": 24.623136935,
    "prime": [
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2019+2425",
    "Frequency_Hz": 254.16034559275386,
    "prime": [
      2,
      127
    ],
    "derived": true
  },
  {
    "PSRJ": "J2019+3810",
    "Frequency_Hz": 1.903892,
    "prime": 2
  },
  {
    "PSRJ": "J2019+72",
    "Frequency_Hz": 4.566210045662101,
    "prime": 5
  },
  {
    "PSRJ": "J2021+3651",
    "Frequency_Hz": 9.6393948581,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2021+4024g",
    "Frequency_Hz": 2.6987639661035248,
    "prime": 3
  },
  {
    "PSRJ": "J2021+4026",
    "Frequency_Hz": 3.769066848,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2022+21",
    "Frequency_Hz": 1.2445550715619167,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2022+2534",
    "Frequency_Hz": 377.93812391457,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2022+2854",
    "Frequency_Hz": 2.912037613413,
    "prime": 3
  },
  {
    "PSRJ": "J2022+3842",
    "Frequency_Hz": 20.585119828259234,
    "prime": [
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2022+3845g",
    "Frequency_Hz": 0.9911785112498762,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2022+5154",
    "Frequency_Hz": 1.88965575261,
    "prime": 2
  },
  {
    "PSRJ": "J2023+0937",
    "Frequency_Hz": 0.62315481163,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2023+2853g",
    "Frequency_Hz": 88.261253309797,
    "prime": [
      2,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2023+5037",
    "Frequency_Hz": 2.683706020472,
    "prime": 3
  },
  {
    "PSRJ": "J2024+48",
    "Frequency_Hz": 0.7923930269413629,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2027+0255",
    "Frequency_Hz": 94.37951293046,
    "prime": [
      2,
      47
    ],
    "derived": true
  },
  {
    "PSRJ": "J2027+2146",
    "Frequency_Hz": 2.511471144452286,
    "prime": 3
  },
  {
    "PSRJ": "J2027+4557",
    "Frequency_Hz": 0.909379126021,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2027+7502",
    "Frequency_Hz": 1.94092353149,
    "prime": 2
  },
  {
    "PSRJ": "J2028+3332",
    "Frequency_Hz": 5.65907208453,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2029+34",
    "Frequency_Hz": 0.5496317467296912,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2029+3744",
    "Frequency_Hz": 0.821824599075,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2029+5459",
    "Frequency_Hz": 1.727386681,
    "prime": 2
  },
  {
    "PSRJ": "J2030+2228",
    "Frequency_Hz": 1.58601101067,
    "prime": 2
  },
  {
    "PSRJ": "J2030+3641",
    "Frequency_Hz": 4.99676888516,
    "prime": 5
  },
  {
    "PSRJ": "J2030+3818g",
    "Frequency_Hz": 7.478312892611426,
    "prime": 7
  },
  {
    "PSRJ": "J2030+3929g",
    "Frequency_Hz": 0.5819299123613552,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2030+3944g",
    "Frequency_Hz": 3.266052648768698,
    "prime": 3
  },
  {
    "PSRJ": "J2030+4415",
    "Frequency_Hz": 4.4039248637,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2030+55",
    "Frequency_Hz": 1.7271157167530227,
    "prime": 2
  },
  {
    "PSRJ": "J2031+34",
    "Frequency_Hz": 0.5497526113249038,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2031-1254",
    "Frequency_Hz": 172.760569821455,
    "prime": 173
  },
  {
    "PSRJ": "J2032+0701",
    "Frequency_Hz": 2.441546665699,
    "prime": 2
  },
  {
    "PSRJ": "J2032+4127",
    "Frequency_Hz": 6.980975,
    "prime": 7
  },
  {
    "PSRJ": "J2033+0042",
    "Frequency_Hz": 0.199465428208,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2033+1734",
    "Frequency_Hz": 168.0966779772235,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2033-1938",
    "Frequency_Hz": 0.7802021983281746,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2034+3632",
    "Frequency_Hz": 273.95,
    "prime": [
      2,
      137
    ],
    "derived": true
  },
  {
    "PSRJ": "J2035+3538",
    "Frequency_Hz": 2.08342,
    "prime": 2
  },
  {
    "PSRJ": "J2035+3655",
    "Frequency_Hz": 40.70837860639,
    "prime": 41
  },
  {
    "PSRJ": "J2036+2835",
    "Frequency_Hz": 0.7359830193997764,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2036+6646",
    "Frequency_Hz": 1.992320885245102,
    "prime": 2
  },
  {
    "PSRJ": "J2037+1942",
    "Frequency_Hz": 0.482071879107,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2037+3621",
    "Frequency_Hz": 1.61625282066,
    "prime": 2
  },
  {
    "PSRJ": "J2038+3447",
    "Frequency_Hz": 6.2435670953068,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2038+35",
    "Frequency_Hz": 6.25,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2038+5319",
    "Frequency_Hz": 0.701967086843,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2038-3816",
    "Frequency_Hz": 0.633998928392,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2039-3616",
    "Frequency_Hz": 305.33963750348,
    "prime": [
      5,
      61
    ],
    "derived": true
  },
  {
    "PSRJ": "J2039-5617",
    "Frequency_Hz": 377.22936337986,
    "prime": [
      13,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J2040+1657",
    "Frequency_Hz": 1.1552597140380219,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2040+20",
    "Frequency_Hz": 3.442340791738382,
    "prime": 3
  },
  {
    "PSRJ": "J2040-21",
    "Frequency_Hz": 1.7761989342806397,
    "prime": 2
  },
  {
    "PSRJ": "J2040-2156",
    "Frequency_Hz": 1.77753964687,
    "prime": 2
  },
  {
    "PSRJ": "J2041+4551",
    "Frequency_Hz": 0.8622090188,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2042+0246",
    "Frequency_Hz": 220.5690959462711,
    "prime": [
      13,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J2043+1711",
    "Frequency_Hz": 420.189443214863,
    "prime": [
      2,
      3,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2043+2740",
    "Frequency_Hz": 10.402471627258636,
    "prime": [
      2,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2043+31",
    "Frequency_Hz": 1.0672358591248665,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2043+7045",
    "Frequency_Hz": 1.7006802721088436,
    "prime": 2
  },
  {
    "PSRJ": "J2044+28",
    "Frequency_Hz": 0.6180469715698392,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2044+4614",
    "Frequency_Hz": 0.718021754053713,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2045+0912",
    "Frequency_Hz": 2.5280927241785234,
    "prime": 3
  },
  {
    "PSRJ": "J2045+3633",
    "Frequency_Hz": 31.563820566264,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2045-68",
    "Frequency_Hz": 337.83783783783787,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2046+1540",
    "Frequency_Hz": 0.8785139369335,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2046+5708",
    "Frequency_Hz": 2.09760208735,
    "prime": 2
  },
  {
    "PSRJ": "J2046-0421",
    "Frequency_Hz": 0.6464376935893,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2047+1053",
    "Frequency_Hz": 233.32170321379,
    "prime": 233
  },
  {
    "PSRJ": "J2047+5029",
    "Frequency_Hz": 2.242431224778,
    "prime": 2
  },
  {
    "PSRJ": "J2048+2255",
    "Frequency_Hz": 3.5223546236187966,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2048+4951",
    "Frequency_Hz": 1.759630876491,
    "prime": 2
  },
  {
    "PSRJ": "J2048-1616",
    "Frequency_Hz": 0.5097919243998,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2050+1259",
    "Frequency_Hz": 0.8189874162,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2051+1248",
    "Frequency_Hz": 1.8077708573997018,
    "prime": 2
  },
  {
    "PSRJ": "J2051+4434g",
    "Frequency_Hz": 0.7673654808312103,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2051+50",
    "Frequency_Hz": 595.2380952380952,
    "prime": [
      5,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J2051-0827",
    "Frequency_Hz": 221.796283653017,
    "prime": [
      2,
      3,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J2052+1219",
    "Frequency_Hz": 503.71330349546,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2052+4421g",
    "Frequency_Hz": 2.6644640430577393,
    "prime": 3
  },
  {
    "PSRJ": "J2053+1718",
    "Frequency_Hz": 8.38449564324,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2053+4650",
    "Frequency_Hz": 79.45162290069,
    "prime": 79
  },
  {
    "PSRJ": "J2053+4718",
    "Frequency_Hz": 0.20365026489,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2053-7200",
    "Frequency_Hz": 2.929660865793,
    "prime": 3
  },
  {
    "PSRJ": "J2054-39",
    "Frequency_Hz": 1.0235414534288638,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2055+15",
    "Frequency_Hz": 462.96296296296293,
    "prime": 463
  },
  {
    "PSRJ": "J2055+1545",
    "Frequency_Hz": 463.17144393614,
    "prime": 463
  },
  {
    "PSRJ": "J2055+2209",
    "Frequency_Hz": 1.2267212728664,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2055+2539",
    "Frequency_Hz": 3.12928867627,
    "prime": 3
  },
  {
    "PSRJ": "J2055+3630",
    "Frequency_Hz": 4.514517006178,
    "prime": 5
  },
  {
    "PSRJ": "J2055+3829",
    "Frequency_Hz": 478.63142759591,
    "prime": 479
  },
  {
    "PSRJ": "J2057+21",
    "Frequency_Hz": 0.8571183680466272,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2057+4701",
    "Frequency_Hz": 1.78707496869,
    "prime": 2
  },
  {
    "PSRJ": "J2102+38",
    "Frequency_Hz": 0.8403361344537815,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2104+2830",
    "Frequency_Hz": 2.46469861867,
    "prime": 2
  },
  {
    "PSRJ": "J2105+07",
    "Frequency_Hz": 0.2669065266652965,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2105+19",
    "Frequency_Hz": 0.28331019633396604,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2105+28",
    "Frequency_Hz": 2.4646507466659435,
    "prime": 2
  },
  {
    "PSRJ": "J2105+6223",
    "Frequency_Hz": 0.433862285366,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2108+4441",
    "Frequency_Hz": 2.410390498047,
    "prime": 2
  },
  {
    "PSRJ": "J2108+4516",
    "Frequency_Hz": 1.732408858793,
    "prime": 2
  },
  {
    "PSRJ": "J2108-3429",
    "Frequency_Hz": 0.702688882099,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2111+2106",
    "Frequency_Hz": 0.2529178500060574,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2111+2132",
    "Frequency_Hz": 0.943812798849,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2111+40",
    "Frequency_Hz": 0.2462447672986949,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2111+4606",
    "Frequency_Hz": 6.3359340865,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2112+0740",
    "Frequency_Hz": 3.631598085482,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2112+4058",
    "Frequency_Hz": 0.24625963556,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2113+2754",
    "Frequency_Hz": 0.8313576437031,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2113+4644",
    "Frequency_Hz": 0.985527729116,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2113+67",
    "Frequency_Hz": 1.8110364561638623,
    "prime": 2
  },
  {
    "PSRJ": "J2115+5448",
    "Frequency_Hz": 384.19030185554107,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2115+6702",
    "Frequency_Hz": 1.81119402046,
    "prime": 2
  },
  {
    "PSRJ": "J2116+1345",
    "Frequency_Hz": 450.75258218597,
    "prime": [
      11,
      41
    ],
    "derived": true
  },
  {
    "PSRJ": "J2116+1414",
    "Frequency_Hz": 2.271935467,
    "prime": 2
  },
  {
    "PSRJ": "J2116+37",
    "Frequency_Hz": 6.854009595613434,
    "prime": 7
  },
  {
    "PSRJ": "J2116+3701",
    "Frequency_Hz": 6.85475255154,
    "prime": 7
  },
  {
    "PSRJ": "J2122+2426",
    "Frequency_Hz": 1.8469909853386248,
    "prime": 2
  },
  {
    "PSRJ": "J2123+36",
    "Frequency_Hz": 0.7727975270479134,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2123+5434",
    "Frequency_Hz": 7.20107927874,
    "prime": 7
  },
  {
    "PSRJ": "J2124+1407",
    "Frequency_Hz": 1.4408098283683,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2124+34",
    "Frequency_Hz": 2.044989775051125,
    "prime": 2
  },
  {
    "PSRJ": "J2124-3358",
    "Frequency_Hz": 202.793893746013,
    "prime": [
      7,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J2127-6648",
    "Frequency_Hz": 3.069635279775,
    "prime": 3
  },
  {
    "PSRJ": "J2129+1210A",
    "Frequency_Hz": 9.0363060726718,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210B",
    "Frequency_Hz": 17.814819156216,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210C",
    "Frequency_Hz": 32.7554227003,
    "prime": [
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210D",
    "Frequency_Hz": 208.2117310709,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210E",
    "Frequency_Hz": 214.987399714593,
    "prime": [
      5,
      43
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210F",
    "Frequency_Hz": 248.32119058101,
    "prime": [
      2,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210G",
    "Frequency_Hz": 26.553254549,
    "prime": [
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210H",
    "Frequency_Hz": 148.2932725188,
    "prime": [
      2,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210I",
    "Frequency_Hz": 195.22871,
    "prime": [
      3,
      5,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210J",
    "Frequency_Hz": 84.44174596102,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210K",
    "Frequency_Hz": 0.51855097775,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+1210L",
    "Frequency_Hz": 0.25247957713,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129+4119",
    "Frequency_Hz": 0.59262128589,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2129-0429",
    "Frequency_Hz": 131.33808937696656,
    "prime": 131
  },
  {
    "PSRJ": "J2129-5721",
    "Frequency_Hz": 268.3592272034145,
    "prime": [
      2,
      67
    ],
    "derived": true
  },
  {
    "PSRJ": "J2131-31",
    "Frequency_Hz": 0.3007518796992481,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2133-0049A",
    "Frequency_Hz": 98.52216748768474,
    "prime": [
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2133-0049B",
    "Frequency_Hz": 143.47202295552367,
    "prime": [
      11,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2133-0049C",
    "Frequency_Hz": 333.3333333333333,
    "prime": [
      3,
      37
    ],
    "derived": true
  },
  {
    "PSRJ": "J2133-0049D",
    "Frequency_Hz": 236.96682464454977,
    "prime": [
      3,
      79
    ],
    "derived": true
  },
  {
    "PSRJ": "J2133-0049E",
    "Frequency_Hz": 270.27027027027026,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2136-1606",
    "Frequency_Hz": 0.814839594757,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2136-5046",
    "Frequency_Hz": 3.74080251222,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2137+6428",
    "Frequency_Hz": 0.57110576181,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2138+4911",
    "Frequency_Hz": 1.4364286935250103,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2138+69",
    "Frequency_Hz": 4.545454545454546,
    "prime": 5
  },
  {
    "PSRJ": "J2139+00",
    "Frequency_Hz": 3.2003072294940313,
    "prime": 3
  },
  {
    "PSRJ": "J2139+2242",
    "Frequency_Hz": 0.9229230079168335,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2139+4716",
    "Frequency_Hz": 3.5354509962,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2139+4738g",
    "Frequency_Hz": 1.795203217004165,
    "prime": 2
  },
  {
    "PSRJ": "J2140-2310A",
    "Frequency_Hz": 90.74962674670715,
    "prime": [
      7,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2140-2311B",
    "Frequency_Hz": 77.003746,
    "prime": [
      7,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2143+0654",
    "Frequency_Hz": 0.1060644595,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2144-3933",
    "Frequency_Hz": 0.11751119526895237,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2144-5237",
    "Frequency_Hz": 198.35548314683,
    "prime": [
      2,
      3,
      11
    ],
    "derived": true
  },
  {
    "PSRJ": "J2145+21",
    "Frequency_Hz": 0.704721634954193,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2145+2158",
    "Frequency_Hz": 0.70472536984,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2145-0750",
    "Frequency_Hz": 62.29588783082522,
    "prime": [
      2,
      31
    ],
    "derived": true
  },
  {
    "PSRJ": "J2148-34",
    "Frequency_Hz": 1.0787486515641855,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2149+6329",
    "Frequency_Hz": 2.6306073898485307,
    "prime": 3
  },
  {
    "PSRJ": "J2150+3427",
    "Frequency_Hz": 1.528397635626,
    "prime": 2
  },
  {
    "PSRJ": "J2150+5247",
    "Frequency_Hz": 3.010183406447,
    "prime": 3
  },
  {
    "PSRJ": "J2150-0326",
    "Frequency_Hz": 284.84324670257,
    "prime": [
      3,
      5,
      19
    ],
    "derived": true
  },
  {
    "PSRJ": "J2151+19",
    "Frequency_Hz": 0.9652509652509652,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2151+2315",
    "Frequency_Hz": 1.684823447350952,
    "prime": 2
  },
  {
    "PSRJ": "J2154-2812",
    "Frequency_Hz": 0.7444012716296955,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2155+2813",
    "Frequency_Hz": 0.6214963145268549,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2155-3118",
    "Frequency_Hz": 0.970870701068,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2155-5641",
    "Frequency_Hz": 0.7279851536629642,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2156+2618",
    "Frequency_Hz": 2.0074315114554078,
    "prime": 2
  },
  {
    "PSRJ": "J2157+4017",
    "Frequency_Hz": 0.655623504347,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2158-27",
    "Frequency_Hz": 2.0964360587002098,
    "prime": 2
  },
  {
    "PSRJ": "J2158-2734",
    "Frequency_Hz": 2.095566761976,
    "prime": 2
  },
  {
    "PSRJ": "J2159+0202",
    "Frequency_Hz": 1.502492875888,
    "prime": 2
  },
  {
    "PSRJ": "J2201+33",
    "Frequency_Hz": 1.0351966873706004,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2202+5040",
    "Frequency_Hz": 1.34159887359,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2203+50",
    "Frequency_Hz": 1.342281879194631,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2204+2700",
    "Frequency_Hz": 11.80601087935,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2205+1444",
    "Frequency_Hz": 1.0660821693492848,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2205+6012",
    "Frequency_Hz": 413.98474429862137,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J2206+6151",
    "Frequency_Hz": 3.0991074420607254,
    "prime": 3
  },
  {
    "PSRJ": "J2207-15",
    "Frequency_Hz": 1.3054830287206267,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2208+4056",
    "Frequency_Hz": 1.56996372132,
    "prime": 2
  },
  {
    "PSRJ": "J2208+4610",
    "Frequency_Hz": 1.5564067924676,
    "prime": 2
  },
  {
    "PSRJ": "J2208+5500",
    "Frequency_Hz": 1.07162470101,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2209+22",
    "Frequency_Hz": 0.5627778715740898,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2210+57",
    "Frequency_Hz": 0.4860432675716792,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2210+5712",
    "Frequency_Hz": 0.487055824584,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2212+2450",
    "Frequency_Hz": 255.917115508,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2212+2933",
    "Frequency_Hz": 0.995428466049,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2213+53",
    "Frequency_Hz": 1.3315579227696406,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2214+3000",
    "Frequency_Hz": 320.5922923290326,
    "prime": [
      3,
      107
    ],
    "derived": true
  },
  {
    "PSRJ": "J2214+5357",
    "Frequency_Hz": 1.331212824278,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2215+1538",
    "Frequency_Hz": 2.672381926728,
    "prime": 3
  },
  {
    "PSRJ": "J2215+4524",
    "Frequency_Hz": 0.36723529308,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2215+5135",
    "Frequency_Hz": 383.1975942761,
    "prime": 383
  },
  {
    "PSRJ": "J2216+5759",
    "Frequency_Hz": 2.386052484968028,
    "prime": 2
  },
  {
    "PSRJ": "J2217+5733",
    "Frequency_Hz": 0.946213113,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2219+4754",
    "Frequency_Hz": 1.857117736985,
    "prime": 2
  },
  {
    "PSRJ": "J2222+2923",
    "Frequency_Hz": 3.55367109584,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2222+5602",
    "Frequency_Hz": 0.748502994011976,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2222-0137",
    "Frequency_Hz": 30.4712137997271,
    "prime": [
      2,
      3,
      5
    ],
    "derived": true
  },
  {
    "PSRJ": "J2225+35",
    "Frequency_Hz": 1.0638297872340425,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2225+6535",
    "Frequency_Hz": 1.4651102368,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2226-03",
    "Frequency_Hz": 1.2992074834351044,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2227+3038",
    "Frequency_Hz": 1.187073247167643,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2228+6447",
    "Frequency_Hz": 0.52826709593,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2228-65",
    "Frequency_Hz": 0.3641687120809329,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2229+2643",
    "Frequency_Hz": 335.8162133708968,
    "prime": [
      2,
      3,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2229+40",
    "Frequency_Hz": 3.664345914254306,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2229+6114",
    "Frequency_Hz": 19.36198863,
    "prime": 19
  },
  {
    "PSRJ": "J2229+6205",
    "Frequency_Hz": 2.257058359945,
    "prime": 2
  },
  {
    "PSRJ": "J2234+0611",
    "Frequency_Hz": 279.5965821510426,
    "prime": [
      2,
      5,
      7
    ],
    "derived": true
  },
  {
    "PSRJ": "J2234+0944",
    "Frequency_Hz": 275.7078326240904,
    "prime": [
      2,
      3,
      23
    ],
    "derived": true
  },
  {
    "PSRJ": "J2234+2114",
    "Frequency_Hz": 0.7359732694508535,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2235+1506",
    "Frequency_Hz": 16.731641206685964,
    "prime": 17
  },
  {
    "PSRJ": "J2236+4929",
    "Frequency_Hz": 1.07328971881,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2236-5527",
    "Frequency_Hz": 144.76914215406418,
    "prime": [
      5,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J2237+2828",
    "Frequency_Hz": 0.9281646147,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2238+5903",
    "Frequency_Hz": 6.1450029089,
    "prime": [
      2,
      3
    ],
    "derived": true
  },
  {
    "PSRJ": "J2238+6021",
    "Frequency_Hz": 0.32573289902280134,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2240+5832",
    "Frequency_Hz": 7.1462,
    "prime": 7
  },
  {
    "PSRJ": "J2241+6941",
    "Frequency_Hz": 1.16904199244,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2241-5236",
    "Frequency_Hz": 457.3101495463383,
    "prime": 457
  },
  {
    "PSRJ": "J2242+6346",
    "Frequency_Hz": 2.16939642526,
    "prime": 2
  },
  {
    "PSRJ": "J2242+6950",
    "Frequency_Hz": 0.600780731556,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2243+1518",
    "Frequency_Hz": 1.675606024809023,
    "prime": 2
  },
  {
    "PSRJ": "J2244+63",
    "Frequency_Hz": 2.1691973969631237,
    "prime": 2
  },
  {
    "PSRJ": "J2248-0101",
    "Frequency_Hz": 2.0954098245,
    "prime": 2
  },
  {
    "PSRJ": "J2251+24",
    "Frequency_Hz": 0.5561852808902524,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2251-3711",
    "Frequency_Hz": 0.082490793464,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2252+2455",
    "Frequency_Hz": 0.556201918195,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2253+12",
    "Frequency_Hz": 1.0211375472276116,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2253+1516",
    "Frequency_Hz": 1.26225015937,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2256-1024",
    "Frequency_Hz": 435.818755096939,
    "prime": [
      2,
      109
    ],
    "derived": true
  },
  {
    "PSRJ": "J2257+5909",
    "Frequency_Hz": 2.71557265035,
    "prime": 3
  },
  {
    "PSRJ": "J2257-16",
    "Frequency_Hz": 2.1321961620469083,
    "prime": 2
  },
  {
    "PSRJ": "J2300+52",
    "Frequency_Hz": 2.3446658851113718,
    "prime": 2
  },
  {
    "PSRJ": "J2301+5852",
    "Frequency_Hz": 0.14328554678,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2302+4442",
    "Frequency_Hz": 192.5919636477142,
    "prime": 193
  },
  {
    "PSRJ": "J2302+48",
    "Frequency_Hz": 1.3475272874275703,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2302+6028",
    "Frequency_Hz": 0.8289095204563027,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2305+19",
    "Frequency_Hz": 3.7133308577794284,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2305+3100",
    "Frequency_Hz": 0.634563531429,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2305+4707",
    "Frequency_Hz": 0.9377598723982691,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2306+31",
    "Frequency_Hz": 2.9274004683840746,
    "prime": 3
  },
  {
    "PSRJ": "J2307+2225",
    "Frequency_Hz": 1.8662670366852112,
    "prime": 2
  },
  {
    "PSRJ": "J2308+5547",
    "Frequency_Hz": 2.104963256901,
    "prime": 2
  },
  {
    "PSRJ": "J2310+6706",
    "Frequency_Hz": 0.5141946062,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2310-0555",
    "Frequency_Hz": 382.76240356281784,
    "prime": 383
  },
  {
    "PSRJ": "J2312+21",
    "Frequency_Hz": 0.7961783439490446,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2312+6931",
    "Frequency_Hz": 1.22944554793,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2313+4253",
    "Frequency_Hz": 2.861773352516,
    "prime": 3
  },
  {
    "PSRJ": "J2315+58",
    "Frequency_Hz": 0.942507068803016,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2316+5619",
    "Frequency_Hz": 0.941974122159,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2317+1439",
    "Frequency_Hz": 290.25460815391,
    "prime": [
      2,
      5,
      29
    ],
    "derived": true
  },
  {
    "PSRJ": "J2317+2149",
    "Frequency_Hz": 0.692207699133,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2319+6411",
    "Frequency_Hz": 4.629237883799778,
    "prime": 5
  },
  {
    "PSRJ": "J2321+6024",
    "Frequency_Hz": 0.443166465253,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2322+2057",
    "Frequency_Hz": 207.96816335836,
    "prime": [
      2,
      13
    ],
    "derived": true
  },
  {
    "PSRJ": "J2322-2650",
    "Frequency_Hz": 288.7586951129066,
    "prime": [
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J2323+1214",
    "Frequency_Hz": 0.265993420483,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2324-6054",
    "Frequency_Hz": 0.42598712937,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2325+6316",
    "Frequency_Hz": 0.696228754897,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2325-0530",
    "Frequency_Hz": 1.15109885937,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2326+6113",
    "Frequency_Hz": 4.279869765973,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2326+6141",
    "Frequency_Hz": 1.2658227848101264,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2326+6243",
    "Frequency_Hz": 3.75729134993,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2327+62",
    "Frequency_Hz": 3.7593984962406015,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2329+16",
    "Frequency_Hz": 1.5820281601012498,
    "prime": 2
  },
  {
    "PSRJ": "J2329+4743",
    "Frequency_Hz": 1.3728558223057838,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2330-2005",
    "Frequency_Hz": 0.608410908337,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2333+20",
    "Frequency_Hz": 0.4364715638776133,
    "prime": [
      0
    ],
    "derived": true
  },
  {
    "PSRJ": "J2333+6145",
    "Frequency_Hz": 1.3211795698388487,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2333-5526",
    "Frequency_Hz": 475.63324237057,
    "prime": [
      2,
      7,
      17
    ],
    "derived": true
  },
  {
    "PSRJ": "J2336-01",
    "Frequency_Hz": 0.9710623422023693,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2337+6151",
    "Frequency_Hz": 2.01869363589,
    "prime": 2
  },
  {
    "PSRJ": "J2338+4818",
    "Frequency_Hz": 8.42387236305,
    "prime": [
      2
    ],
    "derived": true
  },
  {
    "PSRJ": "J2339-0533",
    "Frequency_Hz": 346.71337922051,
    "prime": 347
  },
  {
    "PSRJ": "J2340+08",
    "Frequency_Hz": 3.297065611605671,
    "prime": 3
  },
  {
    "PSRJ": "J2343+6221",
    "Frequency_Hz": 0.5558643690939411,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2346-0609",
    "Frequency_Hz": 0.84640723014,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2347+02",
    "Frequency_Hz": 0.7228201551172053,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2350+31",
    "Frequency_Hz": 1.96811651249754,
    "prime": 2
  },
  {
    "PSRJ": "J2351+6500",
    "Frequency_Hz": 0.8584551911,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2351+8533",
    "Frequency_Hz": 0.98840874179,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2352+65",
    "Frequency_Hz": 0.859106529209622,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2354+6155",
    "Frequency_Hz": 1.058443115007,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2354-22",
    "Frequency_Hz": 1.7921275421329184,
    "prime": 2
  },
  {
    "PSRJ": "J2354-2250",
    "Frequency_Hz": 1.792046218541,
    "prime": 2
  },
  {
    "PSRJ": "J2355+0051",
    "Frequency_Hz": 268.89004281934,
    "prime": 269
  },
  {
    "PSRJ": "J2355+04",
    "Frequency_Hz": 1.0438413361169103,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2355+1523",
    "Frequency_Hz": 0.91374580877,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J2355+2246",
    "Frequency_Hz": 0.5431871833897705,
    "prime": [
      1
    ],
    "derived": true
  },
  {
    "PSRJ": "J1936+18",
    "Frequency_Hz": 67.103,
    "prime": 67,
    "derived": false
  },
  {
    "PSRJ": "J1835-3259A",
    "Frequency_Hz": 61.097,
    "prime": 61,
    "derived": false
  },
  {
    "PSRJ": "J1916+0741g",
    "Frequency_Hz": 59.089,
    "prime": 59,
    "derived": false
  },
  {
    "PSRJ": "J1823-3021D",
    "Frequency_Hz": 53.083,
    "prime": 53,
    "derived": false
  }
];

// Create and export the pulsarsByPrime mapping
export const pulsarsByPrime = organizePulsarsByPrime(pulsarFrequencies);

/**
 * Filter pulsars by prime numbers
 * @param {Array<number|string>} primeNumbers - Array of prime numbers to filter by
 * @param {number} maxPerPrime - Maximum number of pulsars to return per prime
 * @returns {Object} Object with primes as keys and arrays of matching pulsars as values
 */
export function pulsarsByPrimes(primeNumbers, maxPerPrime = 3) {
    const result = {};
    
    // Convert all primeNumbers to numbers
    const primes = primeNumbers.map(p => typeof p === 'string' ? parseInt(p, 10) : p);
    
    // For each requested prime number
    for (const prime of primes) {
        result[prime] = [];
        let count = 0;
        
        // First look for exact prime matches
        for (const pulsar of pulsarFrequencies) {
            if (count >= maxPerPrime) break;
            
            // Check if this is a direct match
            if (!pulsar.derived && pulsar.prime === prime) {
                result[prime].push(pulsar);
                count++;
            }
        }
        
        // If we still need more, look for derived pulsars that include this prime
        if (count < maxPerPrime) {
            for (const pulsar of pulsarFrequencies) {
                if (count >= maxPerPrime) break;
                
                // Check if this is a derived pulsar that includes our prime
                if (pulsar.derived && Array.isArray(pulsar.prime) && pulsar.prime.includes(prime)) {
                    result[prime].push(pulsar);
                    count++;
                }
            }
        }
    }
    
    return result;
}

/**
 * Create phase-locked oscillators for a set of pulsars
 * @param {Array} pulsars - Array of pulsar objects with Frequency_Hz values
 * @returns {Function} A function that takes time t and returns oscillator values
 */
export function phaseLockedLoopForPulsars(pulsars) {
    // Precompute angular frequencies for each pulsar (ω = 2πf)
    const angularFrequencies = pulsars.map(p => 2 * Math.PI * p.Frequency_Hz);
    
    // Random phase offsets for each pulsar (in radians)
    const phaseOffsets = pulsars.map(() => Math.random() * 2 * Math.PI);
    
    // Return a function that computes all oscillator values at a given time
    return function(t) {
        // Calculate values for each pulsar oscillator
        const values = angularFrequencies.map((omega, i) => {
            // cosine oscillation pattern: A*cos(ωt + φ)
            // where omega is angular frequency, t is time, phi is phase offset
            return Math.cos(omega * t + phaseOffsets[i]);
        });
        
        // Return both the oscillator values and the corresponding pulsars
        return {
            values,
            pulsars: pulsars
        };
    };
}

export const pulsars = [
    { id: 1, name: "J1820−1529", frequency: 3.062, prime: 3, active: true, color: "#3B82F6", dist: 1.5 },
    { id: 2, name: "J1505−2524", frequency: 1.011, prime: 1, note: "(symbolic)", active: true, color: "#8B5CF6", dist: 0.8 },
    { id: 3, name: "J2006+4058", frequency: 2.004, prime: 2, active: true, color: "#10B981", dist: 2.1 },
    { id: 4, name: "J1034−5934", frequency: 28.998, prime: 29, active: true, color: "#EF4444", dist: 3.2 },
    { id: 5, name: "J1746−3239", frequency: 5.024, prime: 5, active: true, color: "#F59E0B", dist: 1.7 },
    { id: 6, name: "J1804−2717", frequency: 13.012, prime: 13, active: true, color: "#EC4899", dist: 2.4 },
    { id: 7, name: "J1142+0119", frequency: 7.007, prime: 7, active: true, color: "#06B6D4", dist: 1.1 },
    { id: 8, name: "J1547−5709", frequency: 11.019, prime: 11, active: true, color: "#84CC16", dist: 2.9 },
    { id: 9, name: "J1352−6141", frequency: 17.023, prime: 17, active: true, color: "#F97316", dist: 3.5 },
    { id: 10, name: "J1603−3539", frequency: 19.027, prime: 19, active: true, color: "#8B5CF6", dist: 0.9 },
    { id: 11, name: "J1618−36", frequency: 23.042, prime: 23, active: true, color: "#A855F7", dist: 2.7 },
    { id: 12, name: "J1955+2908", frequency: 31.051, prime: 31, active: true, color: "#EC4899", dist: 1.3 },
    { id: 13, name: "J0509+3801", frequency: 37.061, prime: 37, active: true, color: "#F59E0B", dist: 3.8 },
    { id: 14, name: "J1802−2124", frequency: 41.065, prime: 41, active: true, color: "#10B981", dist: 2.6 },
    { id: 15, name: "J1748−2446ai", frequency: 43.071, prime: 43, active: true, color: "#3B82F6", dist: 1.9 },
    { id: 16, name: "J1544+4937", frequency: 47.077, prime: 47, active: true, color: "#EF4444", dist: 4.1 },
    { id: 17, name: "J1823−3021D", frequency: 53.083, prime: 53, active: true, color: "#06B6D4", dist: 2.3 },
    { id: 18, name: "J1916+0741g", frequency: 59.089, prime: 59, active: true, color: "#84CC16", dist: 0.7 },
    { id: 19, name: "J1835−3259A", frequency: 61.097, prime: 61, active: true, color: "#F97316", dist: 3.0 },
    { id: 20, name: "J1936+18", frequency: 67.103, prime: 67, active: true, color: "#A855F7", dist: 2.5 },
    { id: 21, name: "J1618-3921", frequency: 83.421562665386, prime: 83, active: true, color: "#1E90FF", dist: 2.0 },
    { id: 22, name: "J1802-2124", frequency: 79.06642422995, prime: 79, active: true, color: "#32CD32", dist: 2.0 },
    { id: 23, name: "J1916+0741g", frequency: 89.12655971479501, prime: 89, active: true, color: "#FF4500", dist: 2.0 },
    { id: 24, name: "J2053+4650", frequency: 79.45162290069, prime: 79, active: true, color: "#DA70D6", dist: 2.0 },
];