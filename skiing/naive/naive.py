from operator import itemgetter

def naive(S):
    # S[y][x]
    path = [(0,0)]
    for i in range(len(S)-1):
        last = path[-1]
        px,cost = max([(px,S[last[0]+1][px]) for px in 
            set([max(0,last[1]-1),i,min(last[1]+1,len(S)-1)])],
            key=itemgetter(1))
        print(cost)
        path.append((last[0]+1,px))
    return path
