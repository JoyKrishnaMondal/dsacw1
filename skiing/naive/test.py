from naive import naive
from nose.tools import *

caseone = [[1,4,7,1,5],
          [9,9,4,8,1],
          [3,9,1,4,6],
          [5,1,9,5,8],
          [4,2,2,4,8]]

def test_basic():
    path = naive(caseone)
    expected = [(0,0),(1,1),(2,2),(1,3),(1,4)]
    assert_equal(expected,path)
