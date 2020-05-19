package boardgame;

public class Position {
	//Atributos
	private int row;
	private int column;
	
	//Construtores
	public Position() {
		
	}
	
	public Position(int row, int column) {
		this.row = row;
		this.column = column;
	}

	//Getters e Setters
	public int getRow() {
		return row;
	}

	public void setRow(int row) {
		this.row = row;
	}

	public int getColumn() {
		return column;
	}

	public void setColumn(int column) {
		this.column = column;
	}
	
	@Override
	public String toString() {
		return row + ", " + column;
	}
	
	

}
