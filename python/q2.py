"""输出匹配字符串的开始下标
给出母串和子串，输出子串能够在母串完全匹配的开始位置

比如 asdfasdfa，fas 输出3，就是最小下标。
    """


def matchStr(parentStr, childStr):
    index = parentStr.index(childStr)
    return index


par = str(input('请输入父字符串'))
child = str(input('请输入子字符串'))
index = matchStr(par, child)
print(f'最小位置是{index}')
