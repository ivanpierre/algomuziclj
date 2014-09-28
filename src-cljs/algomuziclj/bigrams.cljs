(ns algomuziclj/bigrams)


(def bigr
  (quote
  {
    ;-----------------------------------
    ; C
    ;
    :I
    {
     :fond
     [
      2  (:II :fond)
      4  (:II :sixte#)
      0  (:II :fond5)
      3  (:II :sixte5)
      3  (:II :sixte3)
      2  (:II :maj)
      2  (:III :fond)
      3  (:III :maj)
      3  (:IV :fond)
      9  (:IV :sixte5)
      1  (:IV :sixte)
      5  (:IV :sixqua)
      5  (:IV :min)
      5  (:IV :dim)
      4  (:V :fond)
      4  (:V :fond5)
      4  (:V :sixte5)
      4  (:V :sixte5)
      4  (:V :sixte)
      4  (:V :sixqua)
      4  (:V :min)
      2  (:V :dim)
      3  (:VI :fond)
      1  (:VI :sixte#)
      3  (:VI :sixte5)
      3  (:VI :sixte)
      2  (:VI :sixte3)
      2  (:VI :maj)
      3  (:VII :fond5)
      2  (:VII :sixte5)
      ]

     :fond5
     [
      7  (:II :sixte)
      7  (:II :sixte3)
      5  (:III :fond)
      3  (:IV :fond)
      1  (:IV :sixte5)
      9  (:IV :sixte)
      7  (:IV :dim)
      6  (:V :fond)
      6  (:V :sixte5)
      6  (:V :sixte)
      6  (:V :sixqua)
      6  (:V :min)
      5  (:VI :sixte#)
      5  (:VI :sixte5)
      5  (:VI :sixte)
      3  (:VII :sixte5)
      2  (:VII :sixte3)
      ]

     :sixte5
     [
      7  (:II :fond)
      7  (:II :maj)
      3  (:III :fond)
      2  (:III :maj)
      10 (:IV :fond)
      13 (:IV :fond5)
      7  (:IV :dim)
      6  (:V :fond)
      6  (:V :fond)
      6  (:V :fond5)
      5  (:V :sixte5)
      7  (:V :sixte)
      10 (:VI :fond)
      10 (:VI :sixte)
      ]

     :sixte
     [
      10 (:II :fond)
      9  (:II :sixte#)
      7  (:IV :fond)
      8  (:IV :fond5)
      7  (:IV :min)
      8  (:IV :dim)
      10 (:V :fond)
      10 (:V :sixqua)
      10 (:V :min)
      10 (:VI :fond)
      10 (:VI :sixte3)
      ]

     :sixte3
     [
      7  (:II :sixte3)
      8  (:II :maj)
      1  (:III :maj)
      2  (:IV :sixte5)
      1  (:IV :dim)
      15 (:V :fond)
      15 (:V :min)
      15 (:VI :fond)
      21 (:VI :sixte)
      14 (:VI :maj)
      ]

     :sixqua
     [
      15 (:IV :fond)
      14 (:IV :sixte)
      51 (:V :fond)
      19 (:V :dim)
      ]

     :min
     [
      3  (:II :fond)
      3  (:II :sixte#)
      3  (:II :sixte5)
      3  (:II :sixte3)
      3  (:II :maj)
      7  (:IV :fond)
      7  (:IV :fond5)
      7  (:IV :sixte5)
      7  (:IV :min)
      7  (:IV :dim)
      11 (:V :fond)
      11 (:V :sixte5)
      11 (:V :sixqua)
      11 (:V :min)
      5  (:VII :sixte3)
      ]

     :dim
     [
      25 (:II :fond)
      25 (:II :maj)
      25 (:V :sixqua)
      25 (:VI :sixte#)
      ]
     }

    ;-----------------------------------
    ; D
    ;
    :II
    {
     :fond
     [
      2  (:I :fond)
      2  (:I :sixte5)
      2  (:I :sixte)
      3  (:I :sixqua)
      12 (:III :maj)
      2  (:IV :fond)
      1  (:IV :min)
      1  (:IV :dim)
      8  (:V :fond)
      8  (:V :fond5)
      7  (:V :sixte5)
      7  (:V :sixte)
      7  (:V :sixqua)
      9  (:V :min)
      9  (:V :dim)
      2  (:VI :fond)
      2  (:VI :sixte#)
      2  (:VI :fond5)
      2  (:VI :sixte5)
      2  (:VI :sixte)
      2  (:VI :maj)
      4  (:VII :sixte5)
      3  (:VII :sixte3)
      ]

     :sixte#
     [
      49 (:V :fond)
      30 (:V :fond5)
      20 (:V :min)
      ]


     :fond5
     [
      3  (:I :sixte5)
      3  (:I :sixte3)
      3  (:I :dim)
      12 (:III :sixte)
      2  (:IV :fond)
      2  (:IV :sixte3)
      14 (:V :fond)
      14 (:V :sixte5)
      14 (:V :sixte)
      13 (:V :min)
      3  (:VI :fond)
      3  (:VI :sixte5)
      3  (:VI :sixte)
      3  (:VI :maj)
      7  (:VII :sixte5)
      ]

     :sixte5
     [
      3  (:I :sixte)
      2  (:I :sixte3)
      2  (:I :sixqua)
      3  (:I :dim)
      6  (:III :fond)
      6  (:III :maj)
      1  (:IV :fond)
      1  (:IV :fond5)
      1  (:IV :sixte5)
      1  (:IV :dim)
      5  (:V :fond)
      15 (:V :fond)
      11 (:V :fond5)
      13 (:V :min)
      6  (:VI :fond)
      6  (:VI :fond5)
      6  (:VI :maj)
      ]

     :sixte
     [
      3  (:I :sixte3)
      3  (:I :sixqua)
      3  (:I :dim)
      4  (:III :fond)
      4  (:III :sixte#)
      3  (:III :maj)
      2  (:IV :sixte3)
      2  (:IV :min)
      3  (:IV :dim)
      18 (:V :fond)
      18 (:V :fond5)
      19 (:V :min)
      19 (:VI :maj)
      ]

     :sixqua
     [
      99 (:III :sixte#)
      ]

     :maj
     [
      00 (:I :sixte)
      12 (:I :dim)
      21 (:IV :dim)
      25 (:V :fond)
      55 (:V :sixte5)
      85 (:V :min)
      ]
     }

    ;-----------------------------------
    ; E
    ;
    :III
    {
     :fond
     [
      3  (:I :sixte5)
      2  (:I :dim)
      7  (:II :sixte#)
      1  (:IV :dim)
      14 (:V :fond)
      14 (:V :sixte#)
      14 (:V :fond5)
      14 (:V :sixte5)
      14 (:V :sixte)
      14 (:V :maj)
      1  (:VII :fond5)
      1  (:VII :sixte5)
      ]

     :sixte#
     [
      33 (:VI :fond)
      33 (:VI :fond5)
      33 (:VI :maj)
      ]
     :sixte5
     [
      99 (:VI :fond)
      ]

     :sixte
     [
      99 (:VI :sixte3)
      ]

     :maj
     [
      1  (:II :sixte#)
      1  (:II :fond5)
      1  (:II :sixte5)
      2  (:II :sixte)
      1  (:IV :dim)
      15 (:VI :fond)
      15 (:VI :sixte#)
      15 (:VI :sixte5)
      15 (:VI :sixte)
      16 (:VI :sixte3)
      17 (:VI :maj)
      ]
     }

    ;-----------------------------------
    ; F
    ;
    :IV
    {
     :fond
     [
      6  (:I :fond)
      6  (:I :fond5)
      2  (:I :sixte5)
      5  (:I :sixte)
      9  (:I :sixqua)
      7  (:I :min)
      3  (:II :fond)
      2  (:II :fond5)
      3  (:II :sixte5)
      2  (:II :sixte)
      4  (:II :sixte3)
      1  (:II :maj)
      1  (:III :sixte#)
      6  (:IV :fond)
      7  (:IV :fond5)
      6  (:IV :sixte5)
      8  (:IV :sixte)
      6  (:IV :min)
      5  (:IV :dim)
      1  (:VI :fond)
      1  (:VI :sixte5)
      1  (:VI :sixte)
      1  (:VI :maj)
      1  (:VII :fond5)
      1  (:VII :sixte5)
      ]

     :fond5
     [
      12 (:I :fond)
      12 (:I :sixte5)
      12 (:I :sixte)
      12 (:I :sixqua)
      12 (:I :min)
      10 (:II :sixte#)
      10 (:II :sixte)
      19 (:IV :dim)
      ]

    :sixte5
     [
      00 (:fond :fond)
      ]

     :types
     {
      :fond    0
      :sixte#  1
      :fond5   2
      :sixte5  3
      :sixte   4
      :sixte3  5
      :sixqua  6
      :maj     7
      :min     8
      :dim     9
      }

     :sixte
     [
      00 (:fond :fond)
      ]

     :sixte3
     [
      00 (:fond :fond)
      ]

     :sixqua
     [
      00 (:fond :fond)
      ]

     :min
     [
      00 (:fond :fond)
      ]

     :dim
     [
      00 (:fond :fond)
      ]
     }

    ;-----------------------------------
    ; G
    ;
    :V
    {
     :fond
     [
      00 (:fond :fond)
      ]
     }

    ;-----------------------------------
    ; A
    ;
    :VI
    {
     :fond
     [
      00 (:fond :fond)
      ]

     }
    ;-----------------------------------
    ; B
    ;
    :VII
    {
     :fond
     [
      00 (:fond :fond)
      ]
     }
    }
  )
)

(comment
  bigr
  )


