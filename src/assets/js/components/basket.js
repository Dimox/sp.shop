import utils from '../utils/utils';

const basket = {
	init() {
		this.countBasketItems();
		this.calcSubtotalAmount();
		this.calcTotalAmount();

		const $removeBtn = document.querySelectorAll('.basket__item-remove');
		const removeBasketItem = e => {
			e.target.closest('.basket__item').remove();
			this.countBasketItems();
			this.calcSubtotalAmount();
			this.calcTotalAmount();
		};
		const onClickRemoveBtn = btn => {
			btn.addEventListener('click', removeBasketItem);
		};
		if (module.hot) {
			module.hot.dispose(() => {
				document.body.removeEventListener('click', removeBasketItem);
			});
		}
		$removeBtn.forEach(el => {
			onClickRemoveBtn(el);
		});

		const $quantityPlus = document.querySelectorAll('.quantity__plus');
		const $quantityMinus = document.querySelectorAll('.quantity__minus');

		const changeQuantity = e => {
			const $btn = e.target.closest('button');
			const $basketItem = $btn.closest('.basket__item');
			const $quantityNumber = $basketItem.querySelector('.quantity__number');
			const $basketItemAmount = $basketItem.querySelector('.basket__item-amount');
			const price = $basketItem.querySelector('.basket__item-price').dataset.price;
			let number = $quantityNumber.textContent;
			if ($btn.matches('.quantity__plus')) {
				number++;
			} else if ($btn.matches('.quantity__minus') && number > 1) {
				number--;
			}
			$quantityNumber.textContent = number;
			$basketItemAmount.textContent = number * price;
			this.calcSubtotalAmount();
			this.calcTotalAmount();
		};
		const onClickQuantityPlusMinus = btn => {
			btn.addEventListener('click', changeQuantity);
		};
		if (module.hot) {
			module.hot.dispose(() => {
				document.body.removeEventListener('click', changeQuantity);
			});
		}
		$quantityPlus.forEach(el => {
			onClickQuantityPlusMinus(el);
		});
		$quantityMinus.forEach(el => {
			onClickQuantityPlusMinus(el);
		});
	},

	countBasketItems() {
		const $basketItem = document.querySelectorAll('.basket__item');
		const $cartCounter = document.querySelector('.header__cart-counter');
		const itemsNumber = $basketItem.length;
		if (itemsNumber < 1) {
			$cartCounter.classList.add('hidden');
		} else {
			$cartCounter.textContent = itemsNumber;
		}
	},

	calcSubtotalAmount() {
		const $basketItem = document.querySelectorAll('.basket__item');
		const $amountSubtotal = document.querySelector('.amount__subtotal');
		const $amountTax = document.querySelector('.amount__tax');
		const $amountShipping = document.querySelector('.amount__shipping');
		let subtotalAmount = 0;
		$basketItem.forEach(item => {
			const number = item.querySelector('.quantity__number').textContent;
			const price = item.querySelector('.basket__item-price').dataset.price;
			subtotalAmount += number * price;
		});
		$amountSubtotal.textContent = utils.formatNumber(subtotalAmount);
		if (subtotalAmount === 0) {
			$amountTax.textContent = 0;
			$amountShipping.textContent = 0;
		}
	},

	calcTotalAmount() {
		const subtotal = utils.parseNumberFromString(
			document.querySelector('.amount__subtotal').textContent
		);
		const tax = utils.parseNumberFromString(document.querySelector('.amount__tax').textContent);
		const shipping = utils.parseNumberFromString(
			document.querySelector('.amount__shipping').textContent
		);
		const $totalNumber = document.querySelector('.amount__total-number');
		$totalNumber.textContent = utils.formatNumber(subtotal + tax + shipping);
	},
};

export default basket;
