package main

func multiplesOf3or5(number int) int {
	var sum_three int = 0
	var sum_five int = 0

	if number < 3 {
		return 0
	}

	for i := 0; i < number; i++ {
		if i%3 == 0 {
			sum_three += i
		}
		if i%5 == 0 {
			if i%3 == 0 {
				continue
			}
			sum_five += i
		}
	}
	return sum_three + sum_five
}

func main() {

}
