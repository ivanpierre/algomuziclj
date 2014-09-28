(ns algomuziclj/bigrams)


(def bigr
  (quote
  {
    ;-----------------------------------
    ; C
    ;
    :c
    {
     :fond
     [
      2  (:d :fond)
      4  (:d :sixte#)
      0  (:d :fond5)
      3  (:d :sixte5)
      3  (:d :sixte3)
      2  (:d :maj)
      2  (:e :fond)
      3  (:e :maj)
      3  (:f :fond)
      9  (:f :sixte5)
      1  (:f :sixte)
      5  (:f :sixqua)
      5  (:f :min)
      5  (:f :dim)
      4  (:g :fond)
      4  (:g :fond5)
      4  (:g :sixte5)
      4  (:g :sixte5)
      4  (:g :sixte)
      4  (:g :sixqua)
      4  (:g :min)
      2  (:g :dim)
      3  (:a :fond)
      1  (:a :sixte#)
      3  (:a :sixte5)
      3  (:a :sixte)
      2  (:a :sixte3)
      2  (:a :maj)
      3  (:b :fond5)
      2  (:b :sixte5)
      ]

     :fond5
     [
      7  (:d :sixte)
      7  (:d :sixte3)
      5  (:e :fond)
      3  (:f :fond)
      1  (:f :sixte5)
      9  (:f :sixte)
      7  (:f :dim)
      6  (:g :fond)
      6  (:g :sixte5)
      6  (:g :sixte)
      6  (:g :sixqua)
      6  (:g :min)
      5  (:a :sixte#)
      5  (:a :sixte5)
      5  (:a :sixte)
      3  (:b :sixte5)
      2  (:b :sixte3)
      ]

     :sixte5
     [
      7  (:d :fond)
      7  (:d :maj)
      3  (:e :fond)
      2  (:e :maj)
      10 (:f :fond)
      13 (:f :fond5)
      7  (:f :dim)
      6  (:g :fond)
      6  (:g :fond)
      6  (:g :fond5)
      5  (:g :sixte5)
      7  (:g :sixte)
      10 (:a :fond)
      10 (:a :sixte)
      ]

     :sixte
     [
      10 (:d :fond)
      9  (:d :sixte#)
      7  (:f :fond)
      8  (:f :fond5)
      7  (:f :min)
      8  (:f :dim)
      10 (:g :fond)
      10 (:g :sixqua)
      10 (:g :min)
      10 (:a :fond)
      10 (:a :sixte3)
      ]

     :sixte3
     [
      7  (:d :sixte3)
      8  (:d :maj)
      1  (:e :maj)
      2  (:f :sixte5)
      1  (:f :dim)
      15 (:g :fond)
      15 (:g :min)
      15 (:a :fond)
      21 (:a :sixte)
      14 (:a :maj)
      ]

     :sixqua
     [
      15 (:f :fond)
      14 (:f :sixte)
      51 (:g :fond)
      19 (:g :dim)
      ]

     :min
     [
      3  (:d :fond)
      3  (:d :sixte#)
      3  (:d :sixte5)
      3  (:d :sixte3)
      3  (:d :maj)
      7  (:f :fond)
      7  (:f :fond5)
      7  (:f :sixte5)
      7  (:f :min)
      7  (:f :dim)
      11 (:g :fond)
      11 (:g :sixte5)
      11 (:g :sixqua)
      11 (:g :min)
      5  (:b :sixte3)
      ]

     :dim
     [
      25 (:d :fond)
      25 (:d :maj)
      25 (:g :sixqua)
      25 (:a :sixte#)
      ]
     }

    ;-----------------------------------
    ; D
    ;
    :d
    {
     :fond
     [
      2  (:c :fond)
      2  (:c :sixte5)
      2  (:c :sixte)
      3  (:c :sixqua)
      12 (:e :maj)
      2  (:f :fond)
      1  (:f :min)
      1  (:f :dim)
      8  (:g :fond)
      8  (:g :fond5)
      7  (:g :sixte5)
      7  (:g :sixte)
      7  (:g :sixqua)
      9  (:g :min)
      9  (:g :dim)
      2  (:a :fond)
      2  (:a :sixte#)
      2  (:a :fond5)
      2  (:a :sixte5)
      2  (:a :sixte)
      2  (:a :maj)
      4  (:b :sixte5)
      3  (:b :sixte3)
      ]

     :sixte#
     [
      49 (:g :fond)
      30 (:g :fond5)
      20 (:g :min)
      ]


     :fond5
     [
      3  (:c :sixte5)
      3  (:c :sixte3)
      3  (:c :dim)
      12 (:e :sixte)
      2  (:f :fond)
      2  (:f :sixte3)
      14 (:g :fond)
      14 (:g :sixte5)
      14 (:g :sixte)
      13 (:g :min)
      3  (:a :fond)
      3  (:a :sixte5)
      3  (:a :sixte)
      3  (:a :maj)
      7  (:b :sixte5)
      ]

     :sixte5
     [
      3  (:c :sixte)
      2  (:c :sixte3)
      2  (:c :sixqua)
      3  (:c :dim)
      6  (:e :fond)
      6  (:e :maj)
      1  (:f :fond)
      1  (:f :fond5)
      1  (:f :sixte5)
      1  (:f :dim)
      5  (:g :fond)
      15 (:g :fond)
      11 (:g :fond5)
      13 (:g :min)
      6  (:a :fond)
      6  (:a :fond5)
      6  (:a :maj)
      ]

     :sixte
     [
      3  (:c :sixte3)
      3  (:c :sixqua)
      3  (:c :dim)
      4  (:e :fond)
      4  (:e :sixte#)
      3  (:e :maj)
      2  (:f :sixte3)
      2  (:f :min)
      3  (:f :dim)
      18 (:g :fond)
      18 (:g :fond5)
      19 (:g :min)
      19 (:a :maj)
      ]

     :sixqua
     [
      99 (:e :sixte#)
      ]

     :maj
     [
      00 (:c :sixte)
      12 (:c :dim)
      21 (:f :dim)
      25 (:g :fond)
      55 (:g :sixte5)
      85 (:g :min)
      ]
     }

    ;-----------------------------------
    ; E
    ;
    :e
    {
     :fond
     [
      3  (:c :sixte5)
      2  (:c :dim)
      7  (:d :sixte#)
      1  (:f :dim)
      14 (:g :fond)
      14 (:g :sixte#)
      14 (:g :fond5)
      14 (:g :sixte5)
      14 (:g :sixte)
      14 (:g :maj)
      1  (:b :fond5)
      1  (:b :sixte5)
      ]

     :sixte#
     [
      33 (:a :fond)
      33 (:a :fond5)
      33 (:a :maj)
      ]
     :sixte5
     [
      99 (:a :fond)
      ]

     :sixte
     [
      99 (:a :sixte3)
      ]

     :maj
     [
      1  (:d :sixte#)
      1  (:d :fond5)
      1  (:d :sixte5)
      2  (:d :sixte)
      1  (:f :dim)
      15 (:a :fond)
      15 (:a :sixte#)
      15 (:a :sixte5)
      15 (:a :sixte)
      16 (:a :sixte3)
      17 (:a :maj)
      ]
     }

    ;-----------------------------------
    ; F
    ;
    :f
    {
     :fond
     [
      6  (:c :fond)
      6  (:c :fond5)
      2  (:c :sixte5)
      5  (:c :sixte)
      9  (:c :sixqua)
      7  (:c :min)
      3  (:d :fond)
      2  (:d :fond5)
      3  (:d :sixte5)
      2  (:d :sixte)
      4  (:d :sixte3)
      1  (:d :maj)
      1  (:e :sixte#)
      6  (:f :fond)
      7  (:f :fond5)
      6  (:f :sixte5)
      8  (:f :sixte)
      6  (:f :min)
      5  (:f :dim)
      1  (:a :fond)
      1  (:a :sixte5)
      1  (:a :sixte)
      1  (:a :maj)
      1  (:b :fond5)
      1  (:b :sixte5)
      ]

     :fond5
     [
      12 (:c :fond)
      12 (:c :sixte5)
      12 (:c :sixte)
      12 (:c :sixqua)
      12 (:c :min)
      10 (:d :sixte#)
      10 (:d :sixte)
      19 (:f :dim)
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
      :sixqua     6
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
    :g
    {
     :fond
     [
      00 (:fond :fond)
      ]
     }

    ;-----------------------------------
    ; A
    ;
    :a
    {
     :fond
     [
      00 (:fond :fond)
      ]

     }
    ;-----------------------------------
    ; B
    ;
    :b
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


