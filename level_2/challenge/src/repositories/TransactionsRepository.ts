import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const { transactions } = this;

    const reducerTransaction = (
      total: number,
      transaction: Transaction,
    ): number => total + transaction.value;

    const income = transactions
      .filter(transaction => transaction.type === 'income')
      .reduce(reducerTransaction, 0);

    const outcome = transactions
      .filter(transaction => transaction.type === 'outcome')
      .reduce(reducerTransaction, 0);

    const currentBalance = {
      income,
      outcome,
      total: income - outcome,
    };

    return currentBalance;
  }

  public create({ title, type, value }: CreateTransaction): Transaction {
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
