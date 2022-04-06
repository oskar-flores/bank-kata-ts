describe('Bank kata test', () => {

    it.each`
                  date      | credit  | debit  | balance
        ${"14/01/2012"} | ${0} | ${500.00} | ${2500.00}
        ${"13/01/2012"} | ${2000.00} | ${0} | ${3000.00}
        ${"10/01/2012"} | ${1000.00} | ${0} | ${1000.00}
    `('Can depose and withdraw money on my account date: $date credit: $credit $debit: $debit balance: $balance', async ({
                                                                                                                                                                                                                                                                                                             }) => {
        // given: 'a client makes a deposit of 1000€ on 10-01-2012'
        //and: 'a deposit of 2000€ on 13-01-2012'
        //and: 'a withdrawal of 500€ on 14-01-2012'
        //when: 'she prints her bank statement'
        //then: 'she would see'

    });

    it.each`
                  date      | credit  | debit  | balance
        ${"14/01/ 2012"} | ${0} | ${500.00} | ${2500.00}
        ${"13/01/ 2012"} | ${2000.00} | ${0} | ${3000.00}
        ${"10/01/ 2012"} | ${1000.00} | ${0} | ${1000.00}
    `('Can depose money on my account with different currencies  $date credit: $credit $debit: $debit balance: $balance', async ({date, credit, debit, balance}) => {
        // given: 'the exchange rate USD to EUR is 0.8924'
        // and: 'a client makes a deposit of 1000€ on 10-01-2012'
        // and: 'a deposit of 2000$ on 13-01-2012'
        // when: 'she prints her bank statement'
        // then: 'she would see'

    });


    it.each`
                  date      | credit  | debit  | balance
        ${"14/01/2012"} | ${0} | ${500.00} | ${2500.00}
        ${"13/01/2012"} | ${2000.00} | ${0} | ${3000.00}
        ${"10/01/2012"} | ${1000.00} | ${0} | ${1000.00}
    `('Can withdraw money on my account with different currencies  $date credit: $credit $debit: $debit balance: $balance', async ({date, credit, debit, balance}) => {
        // given: 'the exchange rate EUR to USD is 1.206'
        // and: 'a client makes a deposit of 1000€ on 10-01-2012'
        // and: 'a withdrawal of 500$ on 14-01-2012 '
        // when: 'she prints her bank statement'
        // then: 'she would see'

    });
});
