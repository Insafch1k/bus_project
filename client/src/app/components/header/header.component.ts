import { Component } from '@angular/core';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuth = true
	logoutIcon = faArrowRightFromBracket
}
