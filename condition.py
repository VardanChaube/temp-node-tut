#while purchasing certain items a discount of 10% is offered if the quantity purchased is more than thousand. Quantity and price are input through the keyboard .write a program to calculate the total expenses.
qty=int(input('Enter value of quantity:'))
price=float(input('Enter the value of price:'))
if qty>1000:
    dis=10 
else:
    dis=0
totalexp=qty*price-qty*price*dis/100
print('total expences Rs.'+ str(totalexp))

#percentage marks obtainedby a student through the keyboard. the student gets a division as per the percentage entered as
#percentage>=60.....first division
#50<=percentage<60...sec division
#40<=percentage<50...third division
#less than 40 ......fail
per=int(input('Enter the percentage obtained:'))
if per>=60:
    print('First division')
elif per>=50:
    print('Second division')
elif per>=40:
    print('Third division')
else:
    print('Fail') 
#In a company an employee is paid as under:
# if his basic salary is less than Rs.1500, then HRA=10% of basic salary and DA= 90% of the basic salary. If this salary is either equal to or above Rs.1500 then HRA=Rs.500 and Da=98% of the basic salary. Enter the Employee's basic salary and find the gross salary.   