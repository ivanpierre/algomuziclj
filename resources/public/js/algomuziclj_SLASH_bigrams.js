// Compiled by ClojureScript 0.0-2322
goog.provide('algomuziclj.bigrams');
goog.require('cljs.core');
algomuziclj.bigrams.bigr = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"fond","fond",-682293233),cljs.core.PersistentVector.fromArray([(2),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(4),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(0),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(2),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(2),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"fond","fond",-682293233)),(3),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(3),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(9),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(5),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(5),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"min","min",444991522)),(5),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(4),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(2),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"dim","dim",-497244536)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(1),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(3),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(2),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth5","sixth5",138548339))], true),new cljs.core.Keyword(null,"fond5","fond5",1194821096),cljs.core.PersistentVector.fromArray([(7),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(7),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(5),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"fond","fond",-682293233)),(3),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(9),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(5),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(5),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(5),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(3),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(2),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965))], true),new cljs.core.Keyword(null,"sixth5","sixth5",138548339),new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(7),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(3),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"fond","fond",-682293233)),(2),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(10),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(13),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(6),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(5),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(7),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(10),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(10),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730))], null),new cljs.core.Keyword(null,"sixth","sixth",800529730),new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(9),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(8),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"min","min",444991522)),(8),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(10),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(10),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(10),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(10),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(10),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965))], null),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(8),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(1),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(15),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(15),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(15),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(21),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(14),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516))], null),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(14),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(51),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(19),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"dim","dim",-497244536))], null),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"min","min",444991522)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(11),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(11),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(11),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(11),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(5),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965))], null),new cljs.core.Keyword(null,"dim","dim",-497244536),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(25),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(25),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(25),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353))], null)], null),new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fond","fond",-682293233),cljs.core.PersistentVector.fromArray([(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"fond","fond",-682293233)),(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(12),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"min","min",444991522)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(8),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(8),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(7),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(7),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(7),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(9),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(9),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"dim","dim",-497244536)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(2),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(4),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(3),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965))], true),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(49),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(30),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(20),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522))], null),new cljs.core.Keyword(null,"fond5","fond5",1194821096),new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"dim","dim",-497244536)),(12),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(13),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(3),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(7),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth5","sixth5",138548339))], null),new cljs.core.Keyword(null,"sixth5","sixth5",138548339),cljs.core.PersistentVector.fromArray([(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"dim","dim",-497244536)),(6),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"fond","fond",-682293233)),(6),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(5),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(15),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(11),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(13),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(6),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(6),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(6),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516))], true),new cljs.core.Keyword(null,"sixth","sixth",800529730),new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"dim","dim",-497244536)),(4),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"fond","fond",-682293233)),(4),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(3),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"min","min",444991522)),(3),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(18),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(18),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(19),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522)),(19),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516))], null),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353))], null),new cljs.core.Keyword(null,"maj","maj",-2096718516),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(12),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"dim","dim",-497244536)),(21),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(25),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(55),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(85),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"min","min",444991522))], null)], null),new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"dim","dim",-497244536)),(7),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(14),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(1),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(1),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth5","sixth5",138548339))], null),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(33),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(33),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(33),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516))], null),new cljs.core.Keyword(null,"sixth5","sixth5",138548339),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233))], null),new cljs.core.Keyword(null,"sixth","sixth",800529730),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(99),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965))], null),new cljs.core.Keyword(null,"maj","maj",-2096718516),new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(1),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(1),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(2),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(1),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(15),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(15),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(15),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(15),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(16),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(17),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516))], null)], null),new cljs.core.Keyword(null,"IV","IV",107818624),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"sixth","sixth",800529730),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965),new cljs.core.Keyword(null,"fond5","fond5",1194821096),new cljs.core.Keyword(null,"dim","dim",-497244536),new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"sixth5","sixth5",138548339),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"fond","fond",-682293233)),(12),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(12),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(12),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(12),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"min","min",444991522)),(10),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(10),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(19),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null),cljs.core.PersistentVector.fromArray([(6),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"fond","fond",-682293233)),(6),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(2),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(5),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(9),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)),(7),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"min","min",444991522)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(2),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(3),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(2),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(4),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965)),(1),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(1),cljs.core.list(new cljs.core.Keyword(null,"III","III",1213096699),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353)),(6),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond","fond",-682293233)),(7),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(6),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(8),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(6),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"min","min",444991522)),(5),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(1),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(1),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth5","sixth5",138548339)),(1),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(1),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(1),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(1),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"sixth5","sixth5",138548339))], true),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"sixth","sixth",800529730),new cljs.core.Keyword(null,"sixth3","sixth3",-3531965),new cljs.core.Keyword(null,"fond5","fond5",1194821096),new cljs.core.Keyword(null,"dim","dim",-497244536),new cljs.core.Keyword(null,"maj","maj",-2096718516),new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"sixth5","sixth5",138548339),new cljs.core.Keyword(null,"sixth#","sixth#",-1249092353),new cljs.core.Keyword(null,"sixqua","sixqua",1758374367)],[(8),(4),(5),(2),(9),(7),(0),(3),(1),(6)]),new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"fond","fond",-682293233)),(7),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"fond5","fond5",1194821096)),(7),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth6","sixth6",-727429912)),(7),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(11),cljs.core.list(new cljs.core.Keyword(null,"I","I",1827140963),new cljs.core.Keyword(null,"min","min",444991522)),(5),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"fond","fond",-682293233)),(5),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"sixth","sixth",800529730)),(5),cljs.core.list(new cljs.core.Keyword(null,"II","II",-1720584066),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(2),cljs.core.list(new cljs.core.Keyword(null,"IV","IV",107818624),new cljs.core.Keyword(null,"dim","dim",-497244536)),(24),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(10),cljs.core.list(new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.Keyword(null,"dim","dim",-497244536)),(4),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"fond","fond",-682293233)),(4),cljs.core.list(new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.Keyword(null,"maj","maj",-2096718516)),(1),cljs.core.list(new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.Keyword(null,"fond5","fond5",1194821096))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null)]),new cljs.core.Keyword(null,"V","V",-1169284006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null)], null),new cljs.core.Keyword(null,"VI","VI",-1197468006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null)], null),new cljs.core.Keyword(null,"VII","VII",-1972014845),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.list(new cljs.core.Keyword(null,"fond","fond",-682293233),new cljs.core.Keyword(null,"fond","fond",-682293233))], null)], null)], null);

//# sourceMappingURL=algomuziclj_SLASH_bigrams.js.map