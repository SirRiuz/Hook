


def numberFormath(number):
  valueReturn = ''
  if len(str(number)) > 0:
    for itemPosition in range(0,len(str(number))):
      if number[itemPosition] != ',':
        valueReturn = valueReturn + number[itemPosition]
      else:
        break
    if len(str(number)) >= 8:
      return valueReturn + 'M'
    return valueReturn + 'K'

  return number

numbers = '{0:,}'.format(100)
value = numberFormath(numbers)
print(value)
