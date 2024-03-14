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

  if(sql == 'cancel')
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

  if(sql == `SELECT SUM(T0."SYSDeb" - T0."SYSCred") "Total_USD"  , T0."ProfitCode" FROM JDT1 T0  INNER JOIN OJDT T1 ON T0."TransId" = T1."TransId" INNER JOIN OACT T2 ON T2."AcctCode" = T0."Account" WHERE T0."ProfitCode" LIKE 'R%'  and Month( T1."RefDate") = Month(Current_Date) and Year(T1."RefDate") = Year(Current_Date) group By T0."ProfitCode"`)
    return [
      { Total_USD: '16817.404000', ProfitCode: 'R32' },
      { Total_USD: '23237.821000', ProfitCode: 'R33' },
      { Total_USD: '69357.446000', ProfitCode: 'R36' },
      { Total_USD: '51348.895000', ProfitCode: 'R37' },
      { Total_USD: '202893.694000', ProfitCode: 'R30' },
      { Total_USD: '103295.579000', ProfitCode: 'R29' }
    ]

  if(sql == 'rig')
    return [
    {
      TransId: 68533,
      AcctName: 'Mud Pump',
      Memo: 'Goods Issue',
      DocNum: '17578',
      Ref2: '_6UM03EAIO',
      TOTAL_USD: '1063.634000'
    },
    {
      TransId: 68552,
      AcctName: 'Inventory Returned',
      Memo: 'Feb2024 PO accrual(Reversal) - 68542',
      DocNum: '',
      Ref2: '',
      TOTAL_USD: '-15605.139000'
    },
    {
      TransId: 68586,
      AcctName: 'Diesel Back Charge',
      Memo: 'A/R Credit Memos - HAL',
      DocNum: '89',
      Ref2: '',
      TOTAL_USD: '7377.989000'
    },
    {
      TransId: 68594,
      AcctName: 'Rig Move Expenses',
      Memo: 'A/P Invoices - V00032',
      DocNum: '34569',
      Ref2: 'A-11490/24, ROP ESCORT, RIG 32, MAR 2024',
      TOTAL_USD: '994.764000'
    },
    {
      TransId: 68595,
      AcctName: 'Rig Move Expenses',
      Memo: 'A/P Invoices - V00032',
      DocNum: '34570',
      Ref2: 'A-11489/24, RIG MOVE, 5.3 KM, RIG 32, MAR 2024',
      TOTAL_USD: '27523.220000'
    },
    {
      TransId: 68595,
      AcctName: 'Fuel Expenses',
      Memo: 'A/P Invoices - V00032',
      DocNum: '34570',
      Ref2: 'A-11489/24, RIG MOVE, 5.3 KM, RIG 32, MAR 2024',
      TOTAL_USD: '-2436.817000'
    },
    {
      TransId: 68050,
      AcctName: 'Accumulator',
      Memo: 'Goods Issue',
      DocNum: '17522',
      Ref2: 'MTF-852',
      TOTAL_USD: '79.380000'
    },
    {
      TransId: 68051,
      AcctName: 'Camp Supplies',
      Memo: 'Goods Issue',
      DocNum: '17523',
      Ref2: '_6UC1FA947',
      TOTAL_USD: '23.037000'
    },
    {
      TransId: 68051,
      AcctName: 'Solid Control System',
      Memo: 'Goods Issue',
      DocNum: '17523',
      Ref2: '_6UC1FA947',
      TOTAL_USD: '216.055000'
    },
    {
      TransId: 68051,
      AcctName: 'Mud Pump',
      Memo: 'Goods Issue',
      DocNum: '17523',
      Ref2: '_6UC1FA947',
      TOTAL_USD: '70.026000'
    },
    {
      TransId: 68053,
      AcctName: 'Safety Material & PPE Expenses',
      Memo: 'Goods Issue',
      DocNum: '17525',
      Ref2: '',
      TOTAL_USD: '2.121000'
    },
    {
      TransId: 68075,
      AcctName: 'Electrical Equipment / Supplies',
      Memo: 'Goods Issue',
      DocNum: '17532',
      Ref2: '_6SW0N660B',
      TOTAL_USD: '13.000000'
    },
    {
      TransId: 68075,
      AcctName: 'Hand Tools And Equipment',
      Memo: 'Goods Issue',
      DocNum: '17532',
      Ref2: '_6SW0N660B',
      TOTAL_USD: '162.303000'
    },
    {
      TransId: 68106,
      AcctName: 'Bop',
      Memo: 'Goods Issue',
      DocNum: '17539',
      Ref2: '_6UF1F9DLI',
      TOTAL_USD: '20200.000000'
    },
    {
      TransId: 68107,
      AcctName: 'Safety Material & PPE Expenses',
      Memo: 'Goods Issue',
      DocNum: '17540',
      Ref2: '_6UF05M5VB',
      TOTAL_USD: '253.343000'
    },
    {
      TransId: 68112,
      AcctName: 'Safety & Medical Test Expenses',
      Memo: 'A/P Invoices - V00014',
      DocNum: '34443',
      Ref2: '116/01/2024, MEDICAL CHARGES, JAN 2024',
      TOTAL_USD: '52.356000'
    },
    {
      TransId: 68153,
      AcctName: 'Certificate and Inspection',
      Memo: 'A/P Invoices - V00111',
      DocNum: '34466',
      Ref2: 'INV2024-00208',
      TOTAL_USD: '314.136000'
    },
    {
      TransId: 68181,
      AcctName: 'Power Washer',
      Memo: 'Goods Issue',
      DocNum: '17545',
      Ref2: '_6UH05538B',
      TOTAL_USD: '176.123000'
    },
    {
      TransId: 68182,
      AcctName: 'Power Washer',
      Memo: 'Goods Issue',
      DocNum: '17546',
      Ref2: '_6UH05538B',
      TOTAL_USD: '176.123000'
    },
    {
      TransId: 68184,
      AcctName: 'Safety Material & PPE Expenses',
      Memo: 'Goods Issue',
      DocNum: '17548',
      Ref2: '_6UH0AL4FP',
      TOTAL_USD: '255.418000'
    },
    {
      TransId: 68188,
      AcctName: 'Mast & Substructure',
      Memo: 'A/P Invoices - V00203',
      DocNum: '34490',
      Ref2: 'FZE/Q/228',
      TOTAL_USD: '28120.300000'
    },
    {
      TransId: 68261,
      AcctName: 'Rig Moves /RM additional charges',
      Memo: 'A/R Invoices - HAL',
      DocNum: '22893',
      Ref2: 'VO-I-32-22-2024',
      TOTAL_USD: '-55000.000000'
    },
    {
      TransId: 68326,
      AcctName: 'Camp Supplies',
      Memo: 'Goods Issue',
      DocNum: '17553',
      Ref2: '',
      TOTAL_USD: '596.859000'
    },
    {
      TransId: 68403,
      AcctName: 'Camp Supplies',
      Memo: 'A/P Invoices - V00376',
      DocNum: '34512',
      Ref2: 'VLN001296',
      TOTAL_USD: '61.518000'
    },
    {
      TransId: 68424,
      AcctName: 'Safety Material & PPE Expenses',
      Memo: 'Goods Issue',
      DocNum: '17555',
      Ref2: '_6UJ0BNL66',
      TOTAL_USD: '114.707000'
    },
    {
      TransId: 68426,
      AcctName: 'Welding Tools & Supplies',
      Memo: 'Goods Issue',
      DocNum: '17557',
      Ref2: '',
      TOTAL_USD: '102.094000'
    },
    {
      TransId: 68428,
      AcctName: 'Bop',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '200.647000'
    },
    {
      TransId: 68428,
      AcctName: 'Choke Manifold',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '42.445000'
    },
    {
      TransId: 68428,
      AcctName: 'Accumulator',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '79.851000'
    },
    {
      TransId: 68428,
      AcctName: 'Iron Roughneck',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '209.547000'
    },
    {
      TransId: 68428,
      AcctName: 'Mud Pump',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '34.031000'
    },
    {
      TransId: 68428,
      AcctName: 'General Spares',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '13.613000'
    },
    {
      TransId: 68428,
      AcctName: 'Tubular (Casing)',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '23.099000'
    },
    {
      TransId: 68428,
      AcctName: 'Winch & Hoist Spares',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '119.853000'
    },
    {
      TransId: 68428,
      AcctName: 'Lubricants Only',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '340.314000'
    },
    {
      TransId: 68428,
      AcctName: 'Handling Tools',
      Memo: 'Goods Issue',
      DocNum: '17559',
      Ref2: '_6UJ03C0EE',
      TOTAL_USD: '497.138000'
    },
    {
      TransId: 68430,
      AcctName: 'Safety Items',
      Memo: 'Goods Issue',
      DocNum: '17561',
      Ref2: '',
      TOTAL_USD: '66.492000'
    },
    {
      TransId: 68484,
      AcctName: 'Safety Material & PPE Expenses',
      Memo: 'Goods Issue',
      DocNum: '17573',
      Ref2: '_6UK1AFGOA',
      TOTAL_USD: '231.468000'
    },
    {
      TransId: 68498,
      AcctName: 'Rental Cars',
      Memo: 'A/P Invoices - V00022',
      DocNum: '34539',
      Ref2: '16727, CHARGES TOWARDS, SEP 2023',
      TOTAL_USD: '26.178000'
    },
    {
      TransId: 68499,
      AcctName: 'Rental Cars',
      Memo: 'A/P Invoices - V00022',
      DocNum: '34540',
      Ref2: '16676, CHARGES TOWARDS, RIG 32, SEP 2023',
      TOTAL_USD: '26.178000'
    }
  ]

}