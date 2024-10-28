"""靠谱的数字
数字从1开始，遇到数字7就会跳过，比如6后边直接是8，69后边直接是80，现在给你个数字，问是第几位？
比如输入8，输出7，就是第7个数。那89那？请你编程输出。``
"""


def findReliableNum(n):
    number = 0
    count = 0
    while count < n:
        number += 1
        if '7' not in str(number):
            count += 1
    return number


a = int(input("请输入一个数字: "))
d = findReliableNum(a)
print(f'数字 {a} 是第 {d} 个靠谱的数字')


# def findReliableNum(n):
#     number = 0
#     count = 0
#     while count < n:
#         number = number+1
#         strdata = '7'
#         if strdata not in str(number):
#             count = count+1

#     return number


# a = input()
# d = findReliableNum(a)
# print(f'数字d', d)
