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
      4  (:II :sixth#)
      0  (:II :fond5)
      3  (:II :sixth5)
      3  (:II :sixth3)
      2  (:II :maj)
      2  (:III :fond)
      3  (:III :maj)
      3  (:IV :fond)
      9  (:IV :sixth5)
      1  (:IV :sixth)
      5  (:IV :sixqua)
      5  (:IV :min)
      5  (:IV :dim)
      4  (:V :fond)
      4  (:V :fond5)
      4  (:V :sixth5)
      4  (:V :sixth5)
      4  (:V :sixth)
      4  (:V :sixqua)
      4  (:V :min)
      2  (:V :dim)
      3  (:VI :fond)
      1  (:VI :sixth#)
      3  (:VI :sixth5)
      3  (:VI :sixth)
      2  (:VI :sixth3)
      2  (:VI :maj)
      3  (:VII :fond5)
      2  (:VII :sixth5)
      ]

     :fond5
     [
      7  (:II :sixth)
      7  (:II :sixth3)
      5  (:III :fond)
      3  (:IV :fond)
      1  (:IV :sixth5)
      9  (:IV :sixth)
      7  (:IV :dim)
      6  (:V :fond)
      6  (:V :sixth5)
      6  (:V :sixth)
      6  (:V :sixqua)
      6  (:V :min)
      5  (:VI :sixth#)
      5  (:VI :sixth5)
      5  (:VI :sixth)
      3  (:VII :sixth5)
      2  (:VII :sixth3)
      ]

     :sixth5
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
      5  (:V :sixth5)
      7  (:V :sixth)
      10 (:VI :fond)
      10 (:VI :sixth)
      ]

     :sixth
     [
      10 (:II :fond)
      9  (:II :sixth#)
      7  (:IV :fond)
      8  (:IV :fond5)
      7  (:IV :min)
      8  (:IV :dim)
      10 (:V :fond)
      10 (:V :sixqua)
      10 (:V :min)
      10 (:VI :fond)
      10 (:VI :sixth3)
      ]

     :sixth3
     [
      7  (:II :sixth3)
      8  (:II :maj)
      1  (:III :maj)
      2  (:IV :sixth5)
      1  (:IV :dim)
      15 (:V :fond)
      15 (:V :min)
      15 (:VI :fond)
      21 (:VI :sixth)
      14 (:VI :maj)
      ]

     :sixqua
     [
      15 (:IV :fond)
      14 (:IV :sixth)
      51 (:V :fond)
      19 (:V :dim)
      ]

     :min
     [
      3  (:II :fond)
      3  (:II :sixth#)
      3  (:II :sixth5)
      3  (:II :sixth3)
      3  (:II :maj)
      7  (:IV :fond)
      7  (:IV :fond5)
      7  (:IV :sixth5)
      7  (:IV :min)
      7  (:IV :dim)
      11 (:V :fond)
      11 (:V :sixth5)
      11 (:V :sixqua)
      11 (:V :min)
      5  (:VII :sixth3)
      ]

     :dim
     [
      25 (:II :fond)
      25 (:II :maj)
      25 (:V :sixqua)
      25 (:VI :sixth#)
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
      2  (:I :sixth5)
      2  (:I :sixth)
      3  (:I :sixqua)
      12 (:III :maj)
      2  (:IV :fond)
      1  (:IV :min)
      1  (:IV :dim)
      8  (:V :fond)
      8  (:V :fond5)
      7  (:V :sixth5)
      7  (:V :sixth)
      7  (:V :sixqua)
      9  (:V :min)
      9  (:V :dim)
      2  (:VI :fond)
      2  (:VI :sixth#)
      2  (:VI :fond5)
      2  (:VI :sixth5)
      2  (:VI :sixth)
      2  (:VI :maj)
      4  (:VII :sixth5)
      3  (:VII :sixth3)
      ]

     :sixth#
     [
      49 (:V :fond)
      30 (:V :fond5)
      20 (:V :min)
      ]


     :fond5
     [
      3  (:I :sixth5)
      3  (:I :sixth3)
      3  (:I :dim)
      12 (:III :sixth)
      2  (:IV :fond)
      2  (:IV :sixth3)
      14 (:V :fond)
      14 (:V :sixth5)
      14 (:V :sixth)
      13 (:V :min)
      3  (:VI :fond)
      3  (:VI :sixth5)
      3  (:VI :sixth)
      3  (:VI :maj)
      7  (:VII :sixth5)
      ]

     :sixth5
     [
      3  (:I :sixth)
      2  (:I :sixth3)
      2  (:I :sixqua)
      3  (:I :dim)
      6  (:III :fond)
      6  (:III :maj)
      1  (:IV :fond)
      1  (:IV :fond5)
      1  (:IV :sixth5)
      1  (:IV :dim)
      5  (:V :fond)
      15 (:V :fond)
      11 (:V :fond5)
      13 (:V :min)
      6  (:VI :fond)
      6  (:VI :fond5)
      6  (:VI :maj)
      ]

     :sixth
     [
      3  (:I :sixth3)
      3  (:I :sixqua)
      3  (:I :dim)
      4  (:III :fond)
      4  (:III :sixth#)
      3  (:III :maj)
      2  (:IV :sixth3)
      2  (:IV :min)
      3  (:IV :dim)
      18 (:V :fond)
      18 (:V :fond5)
      19 (:V :min)
      19 (:VI :maj)
      ]

     :sixqua
     [
      99 (:III :sixth#)
      ]

     :maj
     [
      00 (:I :sixth)
      12 (:I :dim)
      21 (:IV :dim)
      25 (:V :fond)
      55 (:V :sixth5)
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
      3  (:I :sixth5)
      2  (:I :dim)
      7  (:II :sixth#)
      1  (:IV :dim)
      14 (:V :fond)
      14 (:V :sixth#)
      14 (:V :fond5)
      14 (:V :sixth5)
      14 (:V :sixth)
      14 (:V :maj)
      1  (:VII :fond5)
      1  (:VII :sixth5)
      ]

     :sixth#
     [
      33 (:VI :fond)
      33 (:VI :fond5)
      33 (:VI :maj)
      ]
     :sixth5
     [
      99 (:VI :fond)
      ]

     :sixth
     [
      99 (:VI :sixth3)
      ]

     :maj
     [
      1  (:II :sixth#)
      1  (:II :fond5)
      1  (:II :sixth5)
      2  (:II :sixth)
      1  (:IV :dim)
      15 (:VI :fond)
      15 (:VI :sixth#)
      15 (:VI :sixth5)
      15 (:VI :sixth)
      16 (:VI :sixth3)
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
      2  (:I :sixth5)
      5  (:I :sixth)
      9  (:I :sixqua)
      7  (:I :min)
      3  (:II :fond)
      2  (:II :fond5)
      3  (:II :sixth5)
      2  (:II :sixth)
      4  (:II :sixth3)
      1  (:II :maj)
      1  (:III :sixth#)
      6  (:IV :fond)
      7  (:IV :fond5)
      6  (:IV :sixth5)
      8  (:IV :sixth)
      6  (:IV :min)
      5  (:IV :dim)
      1  (:VI :fond)
      1  (:VI :sixth5)
      1  (:VI :sixth)
      1  (:VI :maj)
      1  (:VII :fond5)
      1  (:VII :sixth5)
      ]

     :fond5
     [
      12 (:I :fond)
      12 (:I :sixth5)
      12 (:I :sixth)
      12 (:I :sixqua)
      12 (:I :min)
      10 (:II :sixth#)
      10 (:II :sixth)
      19 (:IV :dim)
      ]

    :sixth5
     [
      7  (:I :fond)
      7  (:I :fond5)
      7  (:I :sixth6)
      7  (:I :sixth)
      11 (:I :min)
      5  (:II :fond)
      5  (:II :sixth)
      5  (:II :maj)
      2  (:IV :dim)
      24 (:V :fond)
      10 (:V :dim)
      4  (:VI :fond)
      4  (:VI :maj)
      1  (:VII :fond5)
      ]

     :types
     {
      :fond    0
      :sixth#  1
      :fond5   2
      :sixth5  3
      :sixth   4
      :sixth3  5
      :sixqua  6
      :maj     7
      :min     8
      :dim     9
      }

     :sixth
     [
      00 (:fond :fond)
      ]

     :sixth3
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


