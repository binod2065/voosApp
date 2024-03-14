/**
 * @param { string} sql
 * @param {[number | string]} [params]
 * @returns {Array[any]}
 */
export default async (sql, params) => {
if(sql == `Select "DocEntry", "LineNum", "ItemCode", "Dscription","OpenQty", "Price", "WhsCode", "U_CstCentrName", "OpenQty" "html:Return Qty" from IGE1 Where "DocEntry" = ?`)
return [
    {
      DocEntry: 15526,
      LineNum: 0,
      ItemCode: '1009613',
      Dscription: 'Fuel Filter CAT',
      OpenQty: '1.000000',
      Price: '3.500000',
      WhsCode: 'CW02',
      U_CstCentrName: null,
      'html:Return Qty': '1.000000'
    },
    {
      DocEntry: 15526,
      LineNum: 1,
      ItemCode: '1004798',
      Dscription: 'OIL FILTER 1R-1808 CAT',
      OpenQty: '1.000000',
      Price: '4.500000',
      WhsCode: 'CW02',
      U_CstCentrName: null,
      'html:Return Qty': '1.000000'
    },
    {
      DocEntry: 15526,
      LineNum: 2,
      ItemCode: '1004639',
      Dscription: '423-8521 - FILTER\\FUEL-WATER SEPARTOR FOR C13',
      OpenQty: '1.000000',
      Price: '11.200000',
      WhsCode: 'CW03',
      U_CstCentrName: null,
      'html:Return Qty': '1.000000'
    },
    {
      DocEntry: 15526,
      LineNum: 3,
      ItemCode: '1013829',
      Dscription: 'Castrol Vecton 15W40 CI4 Plus/SL/E7 �️' ,
      OpenQty: '1.000000',
      Price: '258.409400',
      WhsCode: 'CW02',
      U_CstCentrName: null,
      'html:Return Qty': '1.000000'
    },
    {
      DocEntry: 15526,
      LineNum: 4,
      ItemCode: '1004640',
      Dscription: 'ELEMENT ASSEMBLY FILTER',
      OpenQty: '1.000000',
      Price: '58.452400',
      WhsCode: 'CW02',
      U_CstCentrName: null,
      'html:Return Qty': '1.000000'
    }
  ]

  if(sql == 'Select top 100 "DocEntry", "DocNum", "DocDate" from OIGE Order by "CreateDate" desc')
  return [
    {
      DocEntry: 15526,
      DocNum: 17481,
      DocDate: '2024-02-23 00:00:00.000000000'
    },
    {
      DocEntry: 15525,
      DocNum: 17480,
      DocDate: '2024-02-23 00:00:00.000000000'
    },
    {
      DocEntry: 15524,
      DocNum: 17479,
      DocDate: '2024-02-23 00:00:00.000000000'
    },
    {
      DocEntry: 15523,
      DocNum: 17478,
      DocDate: '2024-02-23 00:00:00.000000000'
    },
    {
      DocEntry: 15522,
      DocNum: 17477,
      DocDate: '2024-02-22 00:00:00.000000000'
    },
    {
      DocEntry: 15514,
      DocNum: 17476,
      DocDate: '2024-02-22 00:00:00.000000000'
    },
    {
      DocEntry: 15513,
      DocNum: 17475,
      DocDate: '2024-02-22 00:00:00.000000000'
    },
    {
      DocEntry: 15512,
      DocNum: 17474,
      DocDate: '2024-02-22 00:00:00.000000000'
    },
    {
      DocEntry: 15511,
      DocNum: 17473,
      DocDate: '2024-02-22 00:00:00.000000000'
    },
    {
      DocEntry: 15503,
      DocNum: 17472,
      DocDate: '2024-02-21 00:00:00.000000000'
    },
    {
      DocEntry: 15502,
      DocNum: 17471,
      DocDate: '2024-02-21 00:00:00.000000000'
    },
    {
      DocEntry: 15498,
      DocNum: 17470,
      DocDate: '2024-02-21 00:00:00.000000000'
    },
    {
      DocEntry: 15497,
      DocNum: 17469,
      DocDate: '2024-02-21 00:00:00.000000000'
    },
    {
      DocEntry: 15496,
      DocNum: 17468,
      DocDate: '2024-02-21 00:00:00.000000000'
    },
    {
      DocEntry: 15495,
      DocNum: 17467,
      DocDate: '2024-02-21 00:00:00.000000000'
    },
    {
      DocEntry: 15494,
      DocNum: 17466,
      DocDate: '2024-02-20 00:00:00.000000000'
    },
    {
      DocEntry: 15493,
      DocNum: 17465,
      DocDate: '2024-02-20 00:00:00.000000000'
    },
    {
      DocEntry: 15492,
      DocNum: 17464,
      DocDate: '2024-02-20 00:00:00.000000000'
    },
    {
      DocEntry: 15491,
      DocNum: 17463,
      DocDate: '2024-02-20 00:00:00.000000000'
    },
    {
      DocEntry: 15490,
      DocNum: 17462,
      DocDate: '2024-02-20 00:00:00.000000000'
    },
    {
      DocEntry: 15483,
      DocNum: 17461,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15482,
      DocNum: 17460,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15481,
      DocNum: 17459,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15475,
      DocNum: 17458,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15471,
      DocNum: 17457,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15470,
      DocNum: 17456,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15469,
      DocNum: 17455,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15468,
      DocNum: 17454,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15467,
      DocNum: 17453,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15466,
      DocNum: 17452,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15465,
      DocNum: 17451,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15464,
      DocNum: 17450,
      DocDate: '2024-02-19 00:00:00.000000000'
    },
    {
      DocEntry: 15455,
      DocNum: 17449,
      DocDate: '2024-02-18 00:00:00.000000000'
    },
    {
      DocEntry: 15454,
      DocNum: 17448,
      DocDate: '2024-02-18 00:00:00.000000000'
    },
    {
      DocEntry: 15448,
      DocNum: 17447,
      DocDate: '2024-02-18 00:00:00.000000000'
    },
    {
      DocEntry: 15445,
      DocNum: 17446,
      DocDate: '2024-02-18 00:00:00.000000000'
    },
    {
      DocEntry: 15444,
      DocNum: 17445,
      DocDate: '2024-02-18 00:00:00.000000000'
    },
    {
      DocEntry: 15443,
      DocNum: 17444,
      DocDate: '2024-02-18 00:00:00.000000000'
    },
    {
      DocEntry: 15440,
      DocNum: 17443,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15438,
      DocNum: 17442,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15437,
      DocNum: 17441,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15436,
      DocNum: 17440,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15435,
      DocNum: 17439,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15434,
      DocNum: 17438,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15431,
      DocNum: 17435,
      DocDate: '2024-02-16 00:00:00.000000000'
    },
    {
      DocEntry: 15430,
      DocNum: 17434,
      DocDate: '2024-02-16 00:00:00.000000000'
    },
    {
      DocEntry: 15429,
      DocNum: 17433,
      DocDate: '2024-02-16 00:00:00.000000000'
    },
    {
      DocEntry: 15433,
      DocNum: 17437,
      DocDate: '2024-02-17 00:00:00.000000000'
    },
    {
      DocEntry: 15432,
      DocNum: 17436,
      DocDate: '2024-02-16 00:00:00.000000000'
    },
    {
      DocEntry: 15418,
      DocNum: 17432,
      DocDate: '2024-02-16 00:00:00.000000000'
    },
    {
      DocEntry: 15417,
      DocNum: 17431,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15416,
      DocNum: 17430,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15415,
      DocNum: 17429,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15414,
      DocNum: 17428,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15406,
      DocNum: 17427,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15405,
      DocNum: 17426,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15404,
      DocNum: 17425,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15403,
      DocNum: 17424,
      DocDate: '2024-02-15 00:00:00.000000000'
    },
    {
      DocEntry: 15397,
      DocNum: 17423,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15394,
      DocNum: 17422,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15393,
      DocNum: 17421,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15392,
      DocNum: 17420,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15391,
      DocNum: 17419,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15389,
      DocNum: 17418,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15388,
      DocNum: 17417,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15387,
      DocNum: 17416,
      DocDate: '2024-02-14 00:00:00.000000000'
    },
    {
      DocEntry: 15381,
      DocNum: 17415,
      DocDate: '2024-02-13 00:00:00.000000000'
    },
    {
      DocEntry: 15380,
      DocNum: 17414,
      DocDate: '2024-02-13 00:00:00.000000000'
    },
    {
      DocEntry: 15379,
      DocNum: 17413,
      DocDate: '2024-02-13 00:00:00.000000000'
    },
    {
      DocEntry: 15378,
      DocNum: 17412,
      DocDate: '2024-02-13 00:00:00.000000000'
    },
    {
      DocEntry: 15370,
      DocNum: 17411,
      DocDate: '2024-02-12 00:00:00.000000000'
    },
    {
      DocEntry: 15369,
      DocNum: 17410,
      DocDate: '2024-02-12 00:00:00.000000000'
    },
    {
      DocEntry: 15368,
      DocNum: 17409,
      DocDate: '2024-02-12 00:00:00.000000000'
    },
    {
      DocEntry: 15367,
      DocNum: 17408,
      DocDate: '2024-02-12 00:00:00.000000000'
    },
    {
      DocEntry: 15366,
      DocNum: 17407,
      DocDate: '2024-02-12 00:00:00.000000000'
    },
    {
      DocEntry: 15357,
      DocNum: 17406,
      DocDate: '2024-02-12 00:00:00.000000000'
    },
    {
      DocEntry: 15328,
      DocNum: 17390,
      DocDate: '2024-02-10 00:00:00.000000000'
    },
    {
      DocEntry: 15354,
      DocNum: 17405,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15353,
      DocNum: 17404,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15352,
      DocNum: 17403,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15351,
      DocNum: 17402,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15350,
      DocNum: 17401,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15349,
      DocNum: 17400,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15348,
      DocNum: 17399,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15347,
      DocNum: 17398,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15342,
      DocNum: 17397,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15338,
      DocNum: 17396,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15337,
      DocNum: 17395,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15336,
      DocNum: 17394,
      DocDate: '2024-02-11 00:00:00.000000000'
    },
    {
      DocEntry: 15331,
      DocNum: 17393,
      DocDate: '2024-02-10 00:00:00.000000000'
    },
    {
      DocEntry: 15330,
      DocNum: 17392,
      DocDate: '2024-02-10 00:00:00.000000000'
    },
    {
      DocEntry: 15329,
      DocNum: 17391,
      DocDate: '2024-02-10 00:00:00.000000000'
    },
    {
      DocEntry: 15327,
      DocNum: 17389,
      DocDate: '2024-02-10 00:00:00.000000000'
    },
    {
      DocEntry: 15326,
      DocNum: 17388,
      DocDate: '2024-02-10 00:00:00.000000000'
    },
    {
      DocEntry: 15325,
      DocNum: 17387,
      DocDate: '2024-02-09 00:00:00.000000000'
    },
    {
      DocEntry: 15324,
      DocNum: 17386,
      DocDate: '2024-02-09 00:00:00.000000000'
    },
    {
      DocEntry: 15323,
      DocNum: 17385,
      DocDate: '2024-02-09 00:00:00.000000000'
    },
    {
      DocEntry: 15322,
      DocNum: 17384,
      DocDate: '2024-02-09 00:00:00.000000000'
    },
    {
      DocEntry: 15321,
      DocNum: 17383,
      DocDate: '2024-02-09 00:00:00.000000000'
    },
    {
      DocEntry: 15320,
      DocNum: 17382,
      DocDate: '2024-02-08 00:00:00.000000000'
    }
  ]

}