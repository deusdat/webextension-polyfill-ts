/**
 * Namespace: browser.theme
 * Generated from Mozilla sources
 *
 * The theme API allows customizing of visual elements of the browser.
 * Permissions: "theme"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Manifest } from "./manifest";
import { Events } from "./events";

export namespace Theme {

    /**
     * Info provided in the onUpdated listener.
     */
    export interface ThemeUpdateInfo {

        /**
         * The new theme after update
         */
        theme: ThemeUpdateInfoThemeType;

        /**
         * The id of the window the theme has been applied to
         * Optional.
         */
        windowId?: number;
    }

    /**
     * The new theme after update
     */
    export interface ThemeUpdateInfoThemeType {
    }

    export interface Static {

        /**
         * Returns the current theme for the specified window or the last focused window.
         *
         * @param windowId Optional. The window for which we want the theme.
         */
        getCurrent(windowId?: number): void;

        /**
         * Make complete updates to the theme. Resolves when the update has completed.
         *
         * @param windowId The id of the window to update. No id updates all windows.
         * @param details The properties of the theme to update.
         */
        update(windowId: number, details: Manifest.ThemeType): void;

        /**
         * Make complete updates to the theme. Resolves when the update has completed.
         *
         * @param details The properties of the theme to update.
         */
        update(details: Manifest.ThemeType): void;

        /**
         * Removes the updates made to the theme.
         *
         * @param windowId Optional. The id of the window to reset. No id resets all windows.
         */
        reset(windowId?: number): void;

        /**
         * Fired when a new theme has been applied
         *
         * @param updateInfo Details of the theme update
         */
        onUpdated: Events.Event<(updateInfo: ThemeUpdateInfo) => void>;
    }
}
